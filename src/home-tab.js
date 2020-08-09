export const home_tab = () => {
  let content = document.getElementById('current-content')
  let h1 = document.createElement('h1')
  h1.innerHTML = 'Welcome to Gourmet Villa'
  h1.id = 'welcome'

  let p = document.createElement('p')
  p.innerHTML = 'Enjoy the experience'
  p.id = 'text'

  let p1 = document.createElement('p')
  p1.innerHTML = 'Sun-Thu: 12:00-22:00 <br> Fri-Sat 10:00-24:00'
  p1.id = 'hours'

  content.append(h1, p, p1)
}