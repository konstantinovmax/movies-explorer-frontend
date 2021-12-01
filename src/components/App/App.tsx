import { useState, useEffect, FC } from 'react';
import styles from './App.module.scss';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

type UserData = {
  email?: String;
  password?: String;
  name?: String;
};

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccessNotice, setIsAccessNotice] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noticeMessage, setNoticeMessage] = useState('');
  const [movieSearchError, setMovieSearchError] = useState('');
  const history = useHistory();

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleInfoToolTipOpen = () => {
    setIsInfoToolTipOpen(true);
  };

  const handleClose = () => {
    setIsMobileMenuOpen(false);
    setIsInfoToolTipOpen(false);
  };

  const handleRegistration = (
    email: String,
    password: String,
    name: String,
  ) => {
    mainApi
      .register(email, password, name)
      .then(res => {
        if (res.successMessage) {
          setIsAccessNotice(true);
          setNoticeMessage(res.successMessage);
          handleInfoToolTipOpen();
          history.push('/signin');
        } else {
          setIsAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLogin = (email: String, password: String) => {
    mainApi
      .login(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          tokenCheck();
          history.push('/movies');
        } else {
          setIsAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then(res => {
          if (res) {
            setCurrentUser(res);
            setIsLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      handleLogout();
    }
  };

  const handleGetAllMovies = () => {
    setIsLoading(true);
    setMovieSearchError('');
    const localMovies = JSON.parse(localStorage.getItem('movies')!);
    if (localMovies) {
      setIsLoading(false);
      setMovies(matchedMovies(localMovies, userMovies));
    } else {
      moviesApi
        .getAllMovies()
        .then(res => {
          setIsLoading(false);
          localStorage.setItem('movies', JSON.stringify(res));
          setMovies(matchedMovies(res, userMovies));
          setMovieSearchError('Фильмы не найдены');
        })
        .catch(err => {
          setMovieSearchError(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          );
          setIsLoading(false);
          setIsAccessNotice(false);
          setNoticeMessage('Ошибка при поиске фильмов');
          handleInfoToolTipOpen();
          console.log(err);
        });
    }
  };

  const handleAddFilm = userMovieData => {
    mainApi
      .addFilm(userMovieData)
      .then(newUserMovie => {
        setUserMovies([newUserMovie, ...userMovies]);
      })
      .catch(err => {
        setIsAccessNotice(false);
        setNoticeMessage(
          'Не удалось сохранить фильм. Попробуйте обновить страницу и повторить попытку.',
        );
        handleInfoToolTipOpen();
        console.log(err);
      });
  };

  const handleDeleteFilm = movie => {
    const userMovie = userMovies.find(
      userMovie =>
        userMovie.movieId === (movie.id || movie.movieId || movie._id),
    );
    mainApi
      .deleteFilm(userMovie._id)
      .then(() => {
        const newUserMovies = userMovies.filter(
          userMovie =>
            userMovie.movieId !== (movie.id || movie.movieId || movie._id),
        );
        setUserMovies(newUserMovies);
      })
      .catch(err => {
        setIsAccessNotice(false);
        setNoticeMessage(
          'Не удалось удалить фильм. Попробуйте обновить страницу и повторить попытку.',
        );
        handleInfoToolTipOpen();
        console.log(err);
      });
  };

  const handleToggleMovie = movie => {
    console.log(movie);
    if (!movie.isAlreadyAdded && !movie._id) {
      handleAddFilm(movie);
    } else {
      handleDeleteFilm(movie);
    }
  };

  const handleUpdateUserData = newUserData => {
    mainApi
      .updateUserData(newUserData)
      .then(res => {
        if (res.email && res.name) {
          setCurrentUser(res);
          setIsAccessNotice(true);
          setNoticeMessage('Данные пользователя успешно изменены');
          handleInfoToolTipOpen();
        } else {
          setIsAccessNotice(false);
          setNoticeMessage(res.message);
          handleInfoToolTipOpen();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    history.push('/');
  };

  const matchedMovies = (movies, userMovies) => {
    userMovies.forEach(userMovie => {
      movies[
        movies.findIndex(movie => movie.id === userMovie.movieId)
      ].isAlreadyAdded = true;
    });
    return movies;
  };

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      Promise.all([mainApi.getUserData(), mainApi.getUserMovies()])
        .then(([userData, userMovies]) => {
          setIsLoading(false);
          setCurrentUser(userData);
          setUserMovies(userMovies);
        })
        .catch(() => {
          setIsLoading(false);
          setMovieSearchError(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          );
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setMovies(matchedMovies(localMovies, userMovies));
      setMovieSearchError('Ничего не найдено');
    } else {
      setMovies([]);
      setMovieSearchError('Начните поиск');
    }
  }, [userMovies]);

  return (
    <div className={styles.root}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className={styles.content}>
          <Header
            isLoggedIn={isLoggedIn}
            isOpen={isMobileMenuOpen}
            onClose={handleClose}
            onOpenMobileMenu={handleMobileMenuOpen}
          />
          <Switch>
            <ProtectedRoute
              path="/movies"
              isLoggedIn={isLoggedIn}
              component={Movies}
              onGetMovies={handleGetAllMovies}
              movies={movies}
              isLoading={isLoading}
              onToggleMovie={handleToggleMovie}
              noticeMessage={noticeMessage}
              movieSearchError={movieSearchError}
            />
            <ProtectedRoute
              path="/saved-movies"
              isLoggedIn={isLoggedIn}
              component={SavedMovies}
              userMovies={userMovies}
              isLoading={isLoading}
              onToggleMovie={handleToggleMovie}
            />
            <ProtectedRoute
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
              onUpdateUser={handleUpdateUserData}
              onLogout={handleLogout}
            />
            <Route path="/signup">
              <Register onRegister={handleRegistration} />
            </Route>
            <Route path="/signin">
              <Login onLogin={handleLogin} />
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
            isAccessNotice={isAccessNotice}
            noticeMessage={noticeMessage}
          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
