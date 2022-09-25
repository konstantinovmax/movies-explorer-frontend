import React from 'react';
import styles from './InfoTooltip.module.scss';
import classNames from 'classnames';
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
      className={classNames(styles.root, isOpen && styles.visible)}
      onClick={handleClickLayoutMenuClose}
    >
      <div className={classNames(styles.container, styles.containerInfo)}>
        <button
          type="reset"
          className={classNames(styles.closeButton, styles.closeButtonInfo)}
          onClick={onClose}
        />
        <img
          className={styles.accessStatus}
          src={isAccessNotice ? successfulAccessImage : failureAccessImage}
          alt={isAccessNotice ? noticeImageAlt.success : noticeImageAlt.fail}
        />
        <h2 className={styles.title}>
          {isAccessNotice ? noticeText.success : noticeText.fail}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
