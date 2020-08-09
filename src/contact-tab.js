export const contact_tab = () => {
  let content = document.getElementById('current-content')
  let h1 = document.createElement('h1')
  h1.innerHTML = 'Contact'
  h1.id = 'contact-title'

  let div = document.createElement('div')
  div.id = 'contact-wrapper-id'
  div.className = 'contact-wrapper'

  let div1 = document.createElement('div')
  div1.id = 'adress-div'

  let adress = document.createElement('p')
  adress.innerHTML = '1629 Harley Brook Lane'
  adress.id = 'adress-id'

  let adressIcon = document.createElement('img')
  adressIcon.src = 'https://img.icons8.com/color/48/000000/marker.png'
  adressIcon.id = 'adress-icon'

  let div2 = document.createElement('div')
  div2.id = 'phone-div'

  let phone = document.createElement('a')
  phone.href = 'tel:814-669-4435'
  phone.innerHTML = '814-669-4435'
  phone.id = 'phone-id'

  let phoneIcon = document.createElement('img')
  phoneIcon.src = 'https://img.icons8.com/color/48/000000/ringing-phone.png'
  phoneIcon.id = 'phone-icon'

  let map = document.createElement('iframe')
  map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14092.752682150558!2d86.91622032092704!3d27.988138821011603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sil!4v1596997222287!5m2!1sen!2sil'
  map.style.width = '600'
  map.style.height = '450'

  let div3 = document.createElement('div')
  div3.id = 'form-div'

  let form = document.createElement('form')
  form.action = 'action_page.php'
  form.method = 'get'
  form.id = 'form'

  let formTitle = document.createElement('p')
  formTitle.innerHTML = "We'd love to hear from you!"
  formTitle.id = 'form-title'

  let nameLabel = document.createElement('label')
  nameLabel.for = 'name-input'
  nameLabel.innerHTML = 'Name'
  let nameInput = document.createElement('input')
  nameInput.id = 'name-input'
  nameInput.type = 'text'
  nameInput.name = 'name-input'
  nameInput.className = 'form-item'

  let phoneLabel = document.createElement('label')
  phoneLabel.for = 'phone-input'
  phoneLabel.innerHTML = 'Phone Number'
  let phoneInput = document.createElement('input')
  phoneInput.id = 'phone-input'
  phoneInput.type = 'tel'
  phoneInput.name = 'phone-input'
  phoneInput.className = 'form-item'


  let emailLabel = document.createElement('label')
  emailLabel.for = 'email-input'
  emailLabel.innerHTML = 'Email adress'
  let emailInput = document.createElement('input')
  emailInput.id = 'email-input'
  emailInput.type = 'email'
  emailInput.name = 'email-input'
  emailInput.className = 'form-item'

  let textLabel = document.createElement('label')
  textLabel.for = 'text-input'
  textLabel.innerHTML = 'Messege'
  let textInput = document.createElement('textarea')
  textInput.id = 'text-input'
  textInput.rows = '4'
  textInput.cols = '30'
  textInput.name = 'text-input'
  textInput.className = 'form-item'


  let submit = document.createElement('input')
  submit.type = 'submit'
  submit.value = 'Send Messege'

  form.append(nameLabel, nameInput, phoneLabel, phoneInput, emailLabel, emailInput, textLabel, textInput, submit)
  div1.append(adressIcon, adress)
  div2.append(phoneIcon, phone)
  div3.append(formTitle, form)
  div.append(h1, div1, div2, div3, map)
  content.append(div)
}