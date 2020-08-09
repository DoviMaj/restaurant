export const tab_bar = () => {
  let logo = document.createElement('img')
  logo.id = 'logo-li'
  logo.className = 'tabs-li'
  logo.src = '../logo.png'

  let homeTab = document.createElement('li')
  homeTab.id = 'home'
  homeTab.className = 'tabs-li'
  homeTab.innerHTML = "Home"

  let menuTab = document.createElement('li')
  menuTab.id = 'menu'
  menuTab.className = 'tabs-li'
  menuTab.innerHTML = "Menu"

  let aboutTab = document.createElement('li')
  aboutTab.id = 'about'
  aboutTab.className = 'tabs-li'
  aboutTab.innerHTML = 'About'

  let contactTab = document.createElement('li')
  contactTab.id = 'contact'
  contactTab.className = 'tabs-li'
  contactTab.innerHTML = 'Contact'

  let ul = document.createElement('ul')
  ul.id = 'nav'
  let content = document.getElementById('main')
  content.appendChild(ul)
  ul.append(logo, homeTab, menuTab, aboutTab, contactTab)
}

