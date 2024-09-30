const detailsContainer = document.getElementById('conteiner-details')

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const details = document.getElementById('details')
  const title = document.getElementById('title')

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (detailsContainer.classList.contains('show')) {
        detailsContainer.classList.remove('show')
        detailsContainer.classList.add('hide')
        setTimeout(() => {
          const cardTitle = card.querySelector('#card-titulo').textContent;
          const cardDescription = card.querySelector('#p-description').textContent;
          document.getElementById('title').textContent = cardTitle
          document.getElementById('details').textContent = cardDescription
          detailsContainer.classList.remove('hide')
          detailsContainer.classList.add('show')
        }, 500)


      } else {
        const cardTitle = card.querySelector('#card-titulo').textContent;
        const cardDescription = card.querySelector('#p-description').textContent;
        document.getElementById('title').textContent = cardTitle
        document.getElementById('details').textContent = cardDescription

        detailsContainer.classList.remove('hide')
        detailsContainer.classList.add('show')
      }

    })
  })
})