import {menu_tab_bar} from './menu_tab_bar'
export const menu_tab = (value) => {
  let ul;
  let content = document.getElementById('current-content')
  if(document.querySelector('#menu-content') === null){
    ul = document.createElement('ul')
    ul.id = 'menu-content'
  }
  else{
    ul = document.getElementById('menu-content')
  }
  value.forEach( i => {
    let li = document.createElement('li')
    li.className = 'menu-item'

    let p0 = document.createElement('p')
    p0.innerText = i.title
    p0.className = 'menu-item-title'

    let img = document.createElement('img')
    img.src = `../dist/img/${i.img}.jpg`
    img.className = 'menu-item-img'

    let p = document.createElement('p')
    p.innerHTML = i.description
    p.className = 'menu-item-text'

    li.append(img, p0, p)
    ul.append(li)
  })
  content.append(ul)
}

