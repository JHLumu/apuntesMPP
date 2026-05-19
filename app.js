// Sistema de interacción común para el aprendizaje activo
// - flashcards: retrieval practice (clic para revelar respuesta)
// - quizzes: práctica entreverada (mezcla de temas)

document.addEventListener('DOMContentLoaded', () => {

  // ===== FLASHCARDS =====
  document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    // accesibilidad teclado
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  // ===== QUIZZES =====
  document.querySelectorAll('.quiz-q').forEach(q => {
    const opts = q.querySelectorAll('.opt');
    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (q.classList.contains('answered')) return;
        const isCorrect = opt.dataset.correct === 'true';
        opt.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          // marcar la correcta también
          q.querySelectorAll('.opt[data-correct="true"]').forEach(c => c.classList.add('correct'));
        }
        q.classList.add('answered');
      });
    });
  });

  // ===== Tabla de contenidos progresiva (si existe) =====
  // No requiere setup adicional.
});
