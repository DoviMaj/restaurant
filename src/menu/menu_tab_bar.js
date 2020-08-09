export const menu_tab_bar = () => {
  let dishTab = document.createElement('li')
  dishTab.id = 'dishes'
  dishTab.className = 'menu-tab-li'
  dishTab.innerHTML = "Dishes"

  let winesTab = document.createElement('li')
  winesTab.id = 'wines'
  winesTab.className = 'menu-tab-li'
  winesTab.innerHTML = "Wines"

  let desertTab = document.createElement('li')
  desertTab.id = 'desert'
  desertTab.className = 'menu-tab-li'
  desertTab.innerHTML = 'Desert'

  let ul = document.createElement('ul')
  ul.id = 'menu-nav'
  let content = document.getElementById('current-content')
  content.appendChild(ul)
  ul.append(dishTab, winesTab, desertTab)
}

