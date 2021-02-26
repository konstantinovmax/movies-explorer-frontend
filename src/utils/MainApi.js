class MainApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getUserData() {
        return fetch(`${this._url}/me`, {
            method: 'GET',
            header: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
    
            return Promise.reject('Произошла ошибка при загрузке данных пользователя с сервера');
        });
    }

    updateUserData({ email, password, name }) {
        return fetch(`${this._url}/me`, {
            method: 'PATCH',
            header: this._headers,
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject('Произошла ошибка при редактировании данных пользователя');
        });
    }

    getUserMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            header: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
    
            return Promise.reject('Произошла ошибка при загрузке списка фильмов пользователя');
        });
    }

    createFilm({ country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN }) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            header: this._headers,
            body: JSON.stringify({
                country: country,
                director: director,
                duration: duration,
                year: year,
                description: description,
                image: image,
                trailer: trailer,
                thumbnail: thumbnail,
                movieId: movieId,
                nameRU: nameRU,
                nameEN: nameEN
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject('Произошла ошибка при попытке добавить фильм');
        });
    }

    deleteFilm({ movieId }) {
        return fetch(`${this._url}/${movieId}`, {
            method: 'DELETE',
            header: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject('Произошла ошибка при попытке удалить фильм');
        });
    }
}

const mainApi = new MainApi({
    url: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/JSON',
    },
});

export default mainApi;
