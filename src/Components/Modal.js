import React from 'react';

const Modal = (props) => {
  console.log(props.show);
  const activeClassName = props.show ? 'modal-book--active' : 'modal-book--disabled';
  return (
    <div className={`modal-book ${activeClassName}`}>
      <article className="modal-book__content">
        <h2 className="heading">Thank you</h2>
        <p className="modal-book_text">
          Thank you for booking reservation. Detailed information will be send to your email address.
        </p>
        <p className="modal-book__text"></p>
        <button className="site-header__btn">Continue</button>
      </article>
    </div>
  );
}

export default Modal;