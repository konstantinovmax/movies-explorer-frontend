import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import * as auth from '../../auth';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [userMovies, setUserMovies] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [accessNotice, setAccessNotice] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const history = useHistory();

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(true);
  }

  function handleMobileMenuClose() {
    setIsMobileMenuOpen(false);
  }

  function handleUpdateUserData(newUserData) {
    mainApi.updateUserData(newUserData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddFilm(userMovieInfo) {
    mainApi.createFilm(userMovieInfo)
      .then((newUserMovie) => {
        setUserMovies([newUserMovie, ...userMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteFilm(userMovie) {
    /* const isOwn = userMovie.owner._id === currentUser._id; */
    mainApi.deleteFilm(userMovie._id/* , isOwn */)
      .then(() => {
        const newUserMovies = userMovie.filter((m) => userMovie._id !== m._id);
        setUserMovies(newUserMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegistration(email, password, name) {
    auth.register(email, password, name)
      .then((res) => {
        if (res.data) {
          setAccessNotice(true);
          history.pushState('./signin');
        } else {
          setAccessNotice(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleLogin(email, password, name) {
    auth.login(email, password, name)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        } else {
          setAccessNotice(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      auth.getContent(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/signin');
  }

  function handleGetAllMovies() {
    moviesApi.getAllMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    tokenCheck(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    Promise.all([mainApi.getUserMovies()])
      .then(([userMovies]) => {
        setUserMovies(userMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="app__content">
          <Header
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          onOpenMobileMenu={handleMobileMenuOpen}
          />
          <Switch>
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
            <Route path="/movies">
              <Movies
              movies={movies}
              onGetMovies={handleGetAllMovies}
              onAddFilm={handleAddFilm}
              />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies
              userMovies={userMovies}
              onDeleteFilm={handleDeleteFilm}
              />
            </Route>
            <Route path="/profile">
              <Profile
              onUpdateUser={handleUpdateUserData}
              onLogout={handleLogout}
              />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
