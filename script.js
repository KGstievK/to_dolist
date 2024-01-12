
const menu_card = document.querySelector('.menu-cards')
const inputs = document.querySelectorAll('input')
const url = document.querySelector('.img1')
const food = document.querySelector('.food')
const price = document.querySelector('.price')
const adminBtn = document.querySelector('.btn_creat')
const menu = document.querySelector('#menu')
const admin = document.querySelector('#product')
const btnMenu = document.querySelector('.btn_menu')
const btnOrders = document.querySelector('.btn_orders')
const btnAdmin = document.querySelector('.btn_admin')


function gat() {
  let getData = JSON.parse(localStorage.getItem('hero')) || []
  getData.forEach(el => {
      let list = document.createElement("div");
      let img = document.createElement("div");
      
      let h2 = document.createElement("h2");
      
      let prices = document.createElement("div")
      
      let span = document.createElement("p")
      let toBtn = document.createElement('button')


      img.setAttribute('class', 'img')
      img.style.background = `url(${el.url})no-repeat center / cover`
      list.setAttribute('class', 'menu-card')
      prices.setAttribute('class', 'prices')
      toBtn.setAttribute('calss', 'to_btn')

      toBtn.innerText = 'to order'
      h2.innerHTML = `${el.food}`
      
      span.innerText = `${el.parse}$`

      prices.append(span , toBtn)
      list.append(img , h2 , prices)
      menu_card.append(list)
  });
}


adminBtn.addEventListener('click', () => {
  let obj = {
    url: url.value,
    food: food.value,
    price: price.value,
  }

  let data = JSON.parse(localStorage.getItem('hero')) || []
  data.push(obj)
  localStorage.setItem('hero', JSON.stringify(data))
  gat()
  for (let input of inputs) {
    input.value = ''
  }
})

btnMenu.addEventListener('click', () => {
  menu.style.display = 'block'
  admin.style.display = 'none'

})
btnAdmin.addEventListener('click', () => {
  menu.style.display = 'none'
  admin.style.display = 'block'

})
btnOrders.addEventListener('click', () => {
  menu.style.display = 'none'
  admin.style.display = 'none'

})

