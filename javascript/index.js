const app = new Vue({
    el: '#app',
    data: {

      Navelements: [
        {
          id: 1,
          title: 'SERVICES',
          path:'#'
        },
        {
          id: 2,
          title: 'PRICING',
          path:'#services'
        },
        {
          id: 3,
          title: 'CONTACTS',
          path:'#home'
        },
        {
          id: 4,
          title: 'ALL BLOCKS',
          path:'#'
        }
      ],

      services: [
        {
          id: 1,
          path: 'images/mt-1733-home-service1.png',
          title: 'Trash removal',
          description:`
            We do trash removal in timely manner,
             so you won't have problems with trash.          
          `
        },
        {
          id: 2,
          path: 'images/mt-1733-home-service2.png',
          title: 'Junk removal',
          description:`
            Our junk hauling service is based on
            how efficiently we can recycle materials.          
          `
        },
        {
          id: 3,
          path: 'images/mt-1733-home-service3.png',
          title: 'Recycle',
          description:`
            We can recycle the waste at a topsoil 
            recycling center.
          `
        }
      ]
    }
})

//navbar options mobile only
const openDrawer = () => {
  const event = document.getElementById('mobile-ul');
  (event.style.display === 'flex')?
    event.style.display = 'none':event.style.display = 'flex'
}


//  modal engine
const modal = document.querySelector('.modal-container')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')

const toogleModal = () => {
    modal.classList.toggle('show-modal')
}

const windowOnClick = (e) => {
    if(e.target === modal){
        toogleModal()
    }
}

trigger.addEventListener('click', toogleModal)
closeButton.addEventListener('click', toogleModal)
window.addEventListener('click', windowOnClick)