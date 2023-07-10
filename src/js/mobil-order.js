(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobil-order-open]'),
    closeModalBtn: document.querySelector('[data-mobil-order-close]'),
    modal: document.querySelector('[data-mobil-order]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
