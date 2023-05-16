const addToBasketBtn = document.querySelector('.add-to-basket');
const cancelOrderBtn = document.querySelector('.cancel-order');
const escapeBtn = document.querySelector('.escape');
const wrapper = document.querySelector('.wrapper');

const modalHTML = (body) => {
  return `<div class="modal">
    <div class="modal-title ${body.type}">
      <div class="modal-icon"><i data-feather="${body.icon}"></i></div>

      <p>${body.title}</p>
    </div>
    <div class="modal-description">
      <p>
        ${body.description}
      </p>
    </div>
    <div class="modal-buttons">
    <button class="modal-btn-accept">${body.btn_accept}</button>
    <button class="modal-btn-decline" >${body.btn_decline}</button>
    </div>

    <button class="modal-cancel"><i data-feather="x"></i></button>
  </div>`;
};

const removeModal = () => {
  const modal = document.querySelector('.modal-container');
  modal.remove();
  document.body.style.overflow = 'auto';
};

const createModal = (value) => {
  const modal = document.createElement('div');
  modal.className = 'modal-container';
  modal.innerHTML = modalHTML(value);
  wrapper.appendChild(modal);

  const btnCancel = document.querySelector('.modal-cancel');
  btnCancel.addEventListener('click', removeModal);

  const btnAccept = document.querySelector('.modal-btn-accept');
  const btnDecline = document.querySelector('.modal-btn-decline');
  btnAccept.addEventListener('click', removeModal);
  btnDecline.addEventListener('click', removeModal);

  modal.addEventListener('click', (e) => {
    e.target.classList == 'modal-container' ? removeModal() : '';
  });

  document.addEventListener('keydown', (e) => {
    e.key === 'Escape' ? removeModal() : '';
  });

  feather.replace();
  document.body.style.overflow = 'hidden';
};

addToBasketBtn.addEventListener('click', () => {
  createModal({
    type: 'info',
    icon: 'info',
    title: 'Produkt dodany do koszyka',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum adipisci nemo molestias incidunt, provident, illo reprehenderit officiis ducimus minima alias maxime cumque quisquam perferendis.',
    btn_accept: 'Przejdź dalej',
    btn_decline: 'Wróć',
  });
});
cancelOrderBtn.addEventListener('click', () => {
  createModal({
    type: 'warning',
    icon: 'alert-triangle',
    title: 'Zamówienie usunięto',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eum adipisci nemo molestias incidunt, provident, illo reprehenderit officiis ducimus minima alias maxime cumque quisquam perferendis.',
    btn_accept: 'Powrót',
    btn_decline: 'Wyjdź',
  });
});
escapeBtn.addEventListener('click', () => {
  createModal({
    type: 'danger',
    icon: 'alert-octagon',
    title: 'Wyjście ze strony',
    description: 'Czy napewno chcesz opuścić stronę?',
    btn_accept: 'Tak',
    btn_decline: 'Nie',
  });
});
