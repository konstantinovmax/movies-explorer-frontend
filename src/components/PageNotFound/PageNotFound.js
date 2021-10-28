import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className="page-not-found">
      <div className="page-not-found__text-container">
        <h2 className="page-not-found__title">404</h2>
        <p className="page-not-found__subtitle">Страница не найдена</p>
      </div>
      <button className="page-not-found__back-button" onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
};

export default PageNotFound;
