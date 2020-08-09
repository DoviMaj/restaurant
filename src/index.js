import {tab_bar} from "./tab-bar.js"
import {home_tab} from "./home-tab"
import {about_tab} from './about-tab'
import {contact_tab} from './contact-tab'
import {menu_tab} from './menu/menu-tab'
import {menu_tab_bar} from './menu/menu_tab_bar'
import {menu} from './menu/menu_catalog'
import {css} from "./css/style.css"

tab_bar()
home_tab() 

const addMenuTabEvents = () => {
let ul = document.querySelectorAll('.menu-tab-li')
  ul.forEach(i =>
  i.addEventListener('click', (evt) => {
  clearMenuContent()
  displayMenuContent(i.id)
  toggleMenuActive(evt)
}))
}

addMenuTabEvents()

const clearMenuContent = () => {
  let currentContent = document.getElementById('menu-content')
  currentContent.innerHTML = ''
}

const displayMenuContent = (selected) => {
  clearMenuContent();
  ((selected === 'dishes') ? menu_tab(menu.dishes) : (selected === 'wines') ? menu_tab(menu.wines) : (selected === 'desert') ? menu_tab(menu.desert)
   : null)
}

const toggleMenuActive = (evt) => {
  let ul = document.querySelectorAll('.menu-tab-li')
  ul.forEach(i => { 
    if(i.classList.contains('active')){ 
      i.classList.remove('active')
    }
  })
  evt.target.classList.add('active') 
}


  let ul = document.querySelector("ul")
  ul.childNodes.forEach(i =>
     i.addEventListener('click', (evt) => {
      displayContent(i.id)
      toggleTabActive(evt)
    }))



const clearContent = () => {
  let currentContent = document.getElementById('current-content')
  currentContent.innerHTML = ''
}


const displayContent = (selected) => {
  clearContent();
  ((selected === 'home') ? home_tab() : (selected === 'menu') ? (menu_tab(menu.dishes), menu_tab_bar(), addMenuTabEvents())
  : (selected === 'about') ? about_tab()
  : (selected === 'contact') ? contact_tab() : null)
}

const toggleTabActive = (evt) => {
  let ul = document.querySelectorAll('.tabs-li')
  ul.forEach(i => { 
    if(i.classList.contains('active')){ 
      i.classList.remove('active')
    }
  })
  evt.target.classList.add('active') 
}

