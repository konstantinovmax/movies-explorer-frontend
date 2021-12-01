import imageNotFound from '../images/image-not-found.png';

class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getUserData() {
    const jwt = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(
          'Произошла ошибка при загрузке данных пользователя'
        );
      });
  }

  updateUserData({ email, password, name }) {
    const jwt = localStorage.getItem('jwt');
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((res) => res.json())
      .catch(() => {
        return Promise.reject(
          'Произошла ошибка при редактировании данных пользователя'
        );
      });
  }

  getUserMovies() {
    const jwt = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject(
          'Произошла ошибка при загрузке списка фильмов пользователя'
        );
      });
  }

  addFilm(movie) {
    const jwt = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        country: movie.country ? movie.country : 'Страна не указана',
        director: movie.director ? movie.director : 'Режиссер не указан',
        duration: movie.duration
          ? movie.duration
          : 'Продолжительность фильма не указана',
        year: movie.year ? movie.year : 'Год не указан',
        description: movie.description
          ? movie.description
          : 'Описание не указано',
        image: movie.image
          ? `https://api.nomoreparties.co${movie.image.url}`
          : `${imageNotFound}`,
        trailer: movie.trailerLink
          ? movie.trailerLink
          : 'https://me-mk.students.nomoredomains.monster/not-found',
        thumbnail:
          `https://api.nomoreparties.co${
            movie.image.formats.thumbnail
              ? movie.image.formats.thumbnail.url
              : ''
          }` || imageNotFound,
        movieId: movie.id,
        nameRU: movie.nameRU ? movie.nameRU : 'Название не указано',
        nameEN: movie.nameEN ? movie.nameEN : 'Название не указано',
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject('Произошла ошибка при попытке добавить фильм');
      });
  }

  deleteFilm(movieId) {
    const jwt = localStorage.getItem('jwt');
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject('Произошла ошибка при попытке удалить фильм');
      });
  }

  register(email, password, name) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    })
      .then((res) => res.json())
      .catch(() => {
        return Promise.reject(
          'Произошла ошибка при попытке зарегистрироваться'
        );
      });
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .catch(() => {
        return Promise.reject('Произошла ошибка при попытке авторизоваться');
      });
  }

  getContent(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return Promise.reject('Произошла ошибка при попытке проверить токен');
      });
  }
}

const mainApi = new MainApi({
  url: 'https://api.me-mk.students.nomoredomains.monster',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/JSON',
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
});

export default mainApi;
