import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile'
import Register from '../Register/Register';
import Login from '../Login/Login';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [accessNotice, setAccessNotice] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [noticeMessage, setNoticeMessage] = React.useState('');
  const [movieSearchError, setMovieSearchError] = React.useState('');
  const history = useHistory();

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(true);
  }

  function handleInfoToolTipOpen() {
    setIsInfoToolTipOpen(true);
  }

  function handleClose() {
    setIsMobileMenuOpen(false);
    setIsInfoToolTipOpen(false);
  }

  function handleRegistration(email, password, name) {
    mainApi.register(email, password, name)
      .then((res) => {
        if (res.successMessage) {
          setAccessNotice(true);
          setNoticeMessage(res.successMessage);
          handleInfoToolTipOpen();
          history.push('/signin');
        } else {
          setAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          tokenCheck();
          history.push('/movies');
        } else {
          setAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      handleLogout();
    }
  }

  function handleGetAllMovies() {
    setLoading(true);
    setMovieSearchError('');
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setLoading(false);
      setMovies(matchedMovies(localMovies, userMovies));
    } else {
      moviesApi.getAllMovies()
        .then((res) => {
          setLoading(false);
          localStorage.setItem('movies', JSON.stringify(res));
          setMovies(matchedMovies(res, userMovies));
          setMovieSearchError('Фильмы не найдены');
        })
        .catch((err) => {
          setMovieSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
          setLoading(false);
          setAccessNotice(false);
          setNoticeMessage('Ошибка при поиске фильмов');
          handleInfoToolTipOpen();
          console.log(err);
        });
    }
  }

  function handleAddFilm(userMovieData) {
    mainApi.addFilm(userMovieData)
      .then((newUserMovie) => {
        setUserMovies([newUserMovie, ...userMovies]);
      })
      .catch((err) => {
        setAccessNotice(false);
        setNoticeMessage('Не удалось сохранить фильм. Попробуйте обновить страницу и повторить попытку.');
        handleInfoToolTipOpen();
        console.log(err);
      });
  }

  function handleDeleteFilm(movie) {
    const userMovie = userMovies.find((userMovie) => userMovie.movieId === (movie.id || movie.movieId || movie._id));
    const isOwn = userMovie.owner._id === currentUser._id;
    mainApi.deleteFilm(userMovie._id, isOwn)
      .then(() => {
        const newUserMovies = userMovies.filter((userMovie) => userMovie.movieId !== (movie.id || movie.movieId || movie._id));
        setUserMovies(newUserMovies);
      })
      .catch((err) => {
        setAccessNotice(false);
        setNoticeMessage('Не удалось удалить фильм. Попробуйте обновить страницу и повторить попытку.');
        handleInfoToolTipOpen();
        console.log(err);
      });
  }

  function handleToggleMovie(movie) {
    if (!movie.isAlreadyAdded && !movie._id) {
      handleAddFilm(movie);
    } else {
      handleDeleteFilm(movie);
    }
  }

  function handleUpdateUserData(newUserData) {
    mainApi.updateUserData(newUserData)
      .then((res) => {
        if (res.email && res.name) {
          setCurrentUser(res);
          setAccessNotice(true);
          setNoticeMessage('Данные пользователя успешно изменены');
          handleInfoToolTipOpen();
        } else {
          setAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  function matchedMovies(movies, userMovies) {
    userMovies.forEach((userMovie) => {
      movies[movies.findIndex((movie) => movie.id === userMovie.movieId)].isAlreadyAdded = true;
    });
    return movies;
  }

  React.useEffect(() => {
    tokenCheck();
  }, [loggedIn]); // eslint-disable-line

  React.useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
        .then(([userData, userMovies]) => {
          setLoading(false);
          setCurrentUser(userData);
          setUserMovies(userMovies);
        })
        .catch(() => {
          setLoading(false);
          setMovieSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.');
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setMovies(matchedMovies(localMovies, userMovies));
      setMovieSearchError('Ничего не найдено');
    } else {
      setMovies([]);
      setMovieSearchError('Начните поиск');
    }
  }, [userMovies])

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app__content">
          <Header
          loggedIn={loggedIn}
          isOpen={isMobileMenuOpen}
          onClose={handleClose}
          onOpenMobileMenu={handleMobileMenuOpen}
          />
          <Switch>
            <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onGetMovies={handleGetAllMovies}
            movies={movies}
            loading={loading}
            onToggleMovie={handleToggleMovie}
            noticeMessage={noticeMessage}
            movieSearchError={movieSearchError}
            />
            <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            userMovies={userMovies}
            loading={loading}
            onToggleMovie={handleToggleMovie}
            />
            <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onUpdateUser={handleUpdateUserData}
            onLogout={handleLogout}
            />
            <Route path="/signup">
              <Register
              onRegister={handleRegistration}
              />
            </Route>
            <Route path="/signin">
              <Login
              onLogin={handleLogin}
              />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
          <InfoTooltip
          isOpen={isInfoToolTipOpen}
          onClose={handleClose}
          accessNotice={accessNotice}
          noticeMessage={noticeMessage}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
