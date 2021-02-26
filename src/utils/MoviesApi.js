class MoviesApi {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getAllMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            header: this._headers
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject('Произошла ошибка при загрузке фильмов');
        });
    }
}

const moviesApi = new MoviesApi({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/JSON',
    },
});

export default moviesApi;
