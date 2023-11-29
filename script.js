document.addEventListener('DOMContentLoaded', function () {
  const rateElements = document.querySelectorAll('.rate');
  const ratingCard = document.querySelector('.rating-card');
  const thankYouCard = document.querySelector('.thank-you');
  const yourResultText = document.querySelector('.your-result');
  const submitButton = document.querySelector('.submit');

  rateElements.forEach(function (element) {
    element.addEventListener('click', function () {
      const selectedIndex = parseInt(element.getAttribute('data-index'), 10);

      rateElements.forEach(function (el) {
        el.classList.remove('selected', 'lower-index');
      });

      element.classList.add('selected');

      rateElements.forEach(function (el) {
        const currentIndex = parseInt(el.getAttribute('data-index'), 10);
        if (currentIndex  === selectedIndex -1 || currentIndex > selectedIndex) {
          el.classList.add('lower-index');
        }
      });

      console.log('Index de la note cliquée :', selectedIndex);

      submitButton.disabled = false;
    });
  });

  submitButton.addEventListener('click', function () {
    if (!document.querySelector('.rate.selected')) {
      console.log('Veuillez sélectionner une note avant de soumettre.');
      return;
    }

    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'flex';

    const selectedIndex = document.querySelector('.rate.selected').getAttribute('data-index');

    yourResultText.textContent = `You selected ${selectedIndex} out of 5`;

    submitButton.disabled = true;
  });
});

