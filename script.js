const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');

function openModal(project) {
  document.getElementById('modal-title').textContent = project.dataset.title;
  document.getElementById('modal-role').textContent = project.dataset.role;
  document.getElementById('modal-details').textContent = project.dataset.details;
  document.getElementById('modal-outcome').textContent = project.dataset.outcome;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

projectCards.forEach((card) => {
  card.addEventListener('click', () => openModal(card));
});

closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

const revealElements = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => observer.observe(el));