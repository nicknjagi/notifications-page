const notifications = document.getElementById('notifications')
const markAll = document.getElementById('mark-all')
const cards = document.querySelectorAll('.card')
let count;

function updateNotificationCount(){
  const unreadNotifications = Array.from(cards).filter(card => card.classList.contains('read') === false);
  count = unreadNotifications.length;
  notifications.innerText = count;
}

window.addEventListener('DOMContentLoaded', updateNotificationCount())

cards.forEach(card => {
  card.addEventListener('click', (e)=>{
    e.currentTarget.classList.add('read')
    updateNotificationCount()
  })
})

function readAll (){
  cards.forEach(card => {
    card.classList.add('read')
    updateNotificationCount()
  })
}

markAll.addEventListener('click', readAll)
