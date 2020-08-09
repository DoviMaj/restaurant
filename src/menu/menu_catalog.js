const MenuItem = ((title, img, description) =>{
  return {title, img, description}
})

export let menu = {
  dishes: [
  MenuItem('Pizza', 'pizza', 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients which is then baked at a high temperature, traditionally in a wood-fired oven'),
  MenuItem('Lasagna', 'lasagna', "Lasagne are a type of wide, flat pasta, possibly one of the oldest types of pasta. Lasagne, or the singular lasagna, is also an Italian dish made of stacked layers of this flat pasta alternating with fillings such as ragu and other vegetables, cheese, and seasonings and spices such as garlic, oregano and basil"),
  MenuItem('Calzone', 'calzone', 'A calzone is an Italian oven-baked turnover made with folded leavened dough. It originated in Naples in the 18th century although, according to the Slow Food foundation, it was also produced in Basilicata around the same time.'),
  MenuItem('Stromboli', 'stromboli', 'Stromboli is a type of turnover filled with various Italian cheeses and cold cuts or vegetables. The dough used is either Italian bread dough or pizza dough. Stromboli was invented by Italian-Americans in the United States in Philadelphia. A stromboli is somewhat similar to a calzone.'),
  MenuItem('Manicotti', 'manicotti', 'Manicotti, literally, "little sleeve", is an Italian American form of pasta. Manicotti are very large pasta tubes, usually ridged, that are intended to be stuffed and baked. The filling is generally ricotta cheese mixed with cooked chopped spinach, and possibly ground meat such as veal'),
  MenuItem('Rollatini', 'rollatini', 'Rollatini is an Italian-style dish that is usually made with thin slices of eggplant, which are dusted in wheat flour or lightly breaded and covered with ricotta and often other cheeses and seasonings, then rolled up and baked. Alternatively, veal, chicken, or fish may be used in place of the eggplant.'),
  MenuItem('Cacciatore', 'cacciatore', 'Cacciatore means "hunter" in Italian. In cuisine, alla cacciatora refers to a meal prepared "hunter-style" with onions, herbs, usually tomatoes, often bell peppers, and sometimes wine. Cacciatore is popularly made with braised chicken or rabbit. '),
  MenuItem('Scaloppine', 'scaloppine', 'Scaloppine is a type of Italian dish that comes in many forms. It consists of thinly sliced meat, most often beef, veal, or chicken, that is dredged in wheat flour and sauteed in one of a variety of reduction sauces'),
  MenuItem('Piccata', 'piccata', 'Piccata describes meat, usually veal or chicken, that is sliced, dredged in flour, then sautéed in a sauce containing lemon juice, butter, and capers.'),
  MenuItem('Spaghetti', 'spaghetti', 'Spaghetti alla puttanesca is an Italian pasta dish invented in Naples in the mid-20th century. Its ingredients typically include tomatoes, olive oil, olives, capers and garlic, in addition to pasta.'),
  MenuItem('Pasta e fagioli', 'pasta', 'Pasta e fagioli, meaning "pasta and beans", is a traditional Italian soup. It is often called pasta fasul in the United States, derived from its Neapolitan name, pasta e fasule. Like many other Italian favorites, including pizza and polenta, it started as a peasant dish, being composed of inexpensive ingredients.'),
  MenuItem('Cotoletta', 'cotoletta', 'Cotoletta is an Italian word for a veal breaded cutlet. There are several Italian variations, as well as in other countries due to Italian diaspora. '),
  MenuItem('Saltimbocca', 'saltimbocca', 'Saltimbocca, also spelled saltinbocca, is an Italian dish made of veal lined or wrapped with prosciutto and sage; marinated in wine, oil or saltwater depending on the region or one`s own taste.'),
  MenuItem('Vitello tonnato', 'vitello', 'Vitello tonnato is a Piedmontese dish of cold, sliced veal covered with a creamy, mayonnaise-like sauce that has been flavored with tuna. It is served chilled or at room temperature, generally in the summertime, as the main course of an Italian meal or as "an exceedingly elegant antipasto for an elaborate dinner.'),
  MenuItem('Gremolata', 'gremolata', 'Gremolata or gremolada is a green sauce made of chopped parsley, lemon zest, and garlic. It is the standard accompaniment to the Milanese braised veal shank dish ossobuco alla milanese. Gremolata is also used as a garnish.')
  ],
  wines: [
    MenuItem('Cabernet Sauvignon', 'cabernet',"  Cabernet Sauvignon is one of the world`s most widely recognized red wine grape varieties. It is grown in nearly every major wine producing country among a diverse spectrum of climates from Canada's Okanagan Valley to Lebanon's Beqaa Valley."),
    MenuItem('Merlot','merlot','Merlot is a dark blue-colored wine grape variety, that is used as both a blending grape and for varietal wines. The name Merlot is thought to be a diminutive of merle, the French name for the blackbird, probably a reference to the color of the grape'),
    MenuItem('Airen','airen','Airen is a variety of Vitis vinifera, a white grape commonly used in winemaking. This grape is native to Spain where it represents almost a quarter of all grapes grown'),
    MenuItem('Tempranillo','tempranillo','Tempranillo (also known as Ull de Llebre, Cencibel, Tinto Fino and Tinta del Pais in Spain, Aragonez or Tinta Roriz in Portugal, and several other synonyms elsewhere) is a black grape variety widely grown to make full-bodied red wines in its native Spain.'),
    MenuItem('Chardonnay','chardonnay','Chardonnay is a green-skinned grape variety used in the production of white wine. The variety originated in the Burgundy wine region of eastern France, but is now grown wherever wine is produced, from England to New Zealand. '),
    MenuItem('Syrah','syrah','Syrah, also known as Shiraz, is a dark-skinned grape variety grown throughout the world and used primarily to produce red wine. In 1999, Syrah was found to be the offspring of two obscure grapes from southeastern France, Dureza and Mondeuse Blanche.'),
    MenuItem('Garnacha','garnacha','Grenache (Garnacha) is a red-wine grape grown extensively in France, Spain, Australia and the United States. It is most commonly found alongside Syrah and Mourvedre in the classic Southern Rhone Blend (notably in Cotes du Rhone wines), and is the main grape variety in Chateauneuf-du-Pape'),
    MenuItem('Sauvignon Blanc','blanc','Sauvignon blanc is a green-skinned grape variety that originates from the Bordeaux region of France. The grape most likely gets its name from the French words sauvage and blanc due to its early origins as an indigenous grape in South West France. It is possibly a descendant of Savagnin.'),
  ],
  desert: [ 
    MenuItem('Pastel de nata','pasteis','Pastel de nata is a Portuguese egg tart pastry dusted with cinnamon. Outside Portugal, they are particularly popular in other parts of Western Europe, Asia and former Portuguese colonies, such as Brazil and Macau.'),
    MenuItem('Tiramisu','tiramisu','Tiramisu is a coffee-flavoured Italian dessert. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone cheese, flavoured with cocoa. The recipe has been adapted into many varieties of cakes and other desserts.'),
    MenuItem('Gulab jamun','gulab','Gulab jamun is a milk-solid-based sweet from the Indian subcontinent, and a type of mithai, popular in India, Nepal, Pakistan, the Maldives, and Bangladesh, as well as Myanmar'),
    MenuItem('S\'mores','smores', 'A s\'more is a campfire treat popular in the United States, Mexico, and Canada, consisting of one or more toasted marshmallows and a layer of chocolate placed between two pieces of graham cracker or cookie.'),
    MenuItem('Churros','churros','A churro is a fried-dough pastry—predominantly choux—based snack. Churros are traditional in Spain and Portugal, where they originated, as well as in the Philippines and Ibero-America.')
  ]
}
