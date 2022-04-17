const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener('click', function(){
    const pageId = card.getAttribute('id')
    const modal = modalOverlay.querySelector('.modal')

    modalOverlay.classList.add('active')

    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${pageId}`

    modal.querySelector('.max').innerHTML = "fullscreen"
  })
}

modalOverlay.querySelector('.close').addEventListener('click', function(){
  const modal = modalOverlay.querySelector('.modal')
  modalOverlay.classList.remove('active')

  modalOverlay.querySelector('.modal').classList.remove('maximize')

  modal.querySelector('.max').innerHTML = "fullscreen"
})

modalOverlay.querySelector('.max').addEventListener('click', function(){
  const modal = modalOverlay.querySelector('.modal')
  const max = modal.classList.contains('maximize')

  if (max == true) {
    modal.classList.remove('maximize')
    modal.querySelector('.max').innerHTML = "fullscreen"
  } else {
    modal.classList.add('maximize')
    modal.querySelector('.max').innerHTML = "close_fullscreen"
  }
})