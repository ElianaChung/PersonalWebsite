const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-close');
const projectCards = document.querySelectorAll('.project-card');

function openModal(project) {
  const cardRect = project.getBoundingClientRect();
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');

  document.getElementById('modal-title').textContent = project.dataset.title;
  document.getElementById('modal-role').textContent = project.dataset.role;
  document.getElementById('modal-details').textContent = project.dataset.details;
  document.getElementById('modal-outcome').textContent = project.dataset.outcome;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');

  // Start the modal small, positioned where the card was
  modalContent.style.transform = `translate(${cardRect.left - window.innerWidth / 2 + cardRect.width / 2}px, ${cardRect.top - window.innerHeight / 2 + cardRect.height / 2}px) scale(0.3)`;
  modalContent.style.opacity = '0';

  // Force the browser to register that starting position before animating
  requestAnimationFrame(() => {
    modalContent.style.transform = 'translate(0, 0) scale(1)';
    modalContent.style.opacity = '1';
  });
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
    console.log(entry.target.id, entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, { threshold: 0.15 });

revealElements.forEach((el) => observer.observe(el));