import './InfoTooltip.css';
import successfulAccessImage from '../../images/infoTooltipDone.png';
import failureAccessImage from '../../images/infoTooltipDenied.png';

const InfoTooltip = ({ noticeMessage, onClose, isOpen, isAccessNotice }) => {
  const noticeText = {
    success: noticeMessage,
    fail: noticeMessage,
  };

  const noticeImageAlt = {
    success: 'Успешно',
    fail: 'Ошибка',
  };

  const handleClickLayoutMenuClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal modal_type_signup-info ${isOpen && 'modal_is-open'}`}
      onClick={handleClickLayoutMenuClose}
    >
      <div className="modal__container modal__container_type_signup-info">
        <button
          type="reset"
          className="modal__close-button modal__close-button_type-signup-info"
          onClick={onClose}
        />
        <img
          className="modal__access-status"
          src={isAccessNotice ? successfulAccessImage : failureAccessImage}
          alt={isAccessNotice ? noticeImageAlt.success : noticeImageAlt.fail}
        />
        <h2 className="modal__title">
          {isAccessNotice ? noticeText.success : noticeText.fail}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
