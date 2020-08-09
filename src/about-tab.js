export const about_tab = () => {
  let content = document.getElementById('current-content')
  let h1 = document.createElement('h1')
  h1.innerHTML = 'About Us'
  h1.id = 'welcome'

  let p1 = document.createElement('p')
  p1.innerHTML = "Gourmet Villa began on April 26th, 2002 in the city of Hacienda Heights. Focusing on the goals of \"Quality, Healthy, and Tradition\" the company is family operation making each dish in our own kitchens from scratch. Gourmet Villa has three generations of family member working together to fulfill the idea \"Honor the Customer, Quality Comes First\". Through hard work and dedication, Gourmet Villa began building its brand around the idea of delicious and authentic traditional italian food. <br><br>  Every day, before dawn, without fail, each store begins to grind up soybeans, roll out the dough for the oven baked bun and light the stoves to begin frying the deep fried crullers. Over the years the weary individuals working the grave yard shifts, the foreigners visiting LA, and those getting ready to go to work stop by our restaurants to enjoy hot, freshly ground soy milk, made to order dishes such as fried daikon cake and egg crepes or our many styles of rice rolls, filling up their stomachs and their hearts. We take pride in the faces of our satisfied customers leaving the restaurant after having taken respite from their busy lives to truly enjoy a traditional meal reminding them of our cultural heritage. <br><br> In order to better serve our customers we opened our second location on March, 2009 in the city of San Gabriel, followed by Irvine in early 2013 and Arcadia in mid 2013. <br><br>  To remain true to our customers, we have forgone the use of a centralized kitchen like many restaurants we see that prepares semi-ready foods only to be heated up and served to their customers. We honor the customers by providing them with the freshest, most delicious, and authentic meal experience possible."
  p1.id = 'history-text'

  content.append(h1, p1)
}