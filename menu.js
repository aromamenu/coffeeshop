// menu.js
export const MENU = {
 hot: [
    { id:'h19', ar:'كراميل ماكياتو', en:'Caramel Macchiato', img:'photos/caramelmachiato.png', price:'$2.50' },
  { id:'h20', ar:' كافيه موكا لاتيه' , en:'Caffè Mocha late', img:'photos/caffemocha.png', price:'$2.50' },
  { id:'h21', ar:'وايت موكا', en:'White Mocha', img:'photos/white-mocha.png', price:'$2.50' },
  { id:'h22', ar:'شوكولاتة ساخنة', en:'Hot Chocolate', img:'photos/hotchocolate.png', price:'$2.00' },

  { id:'h1', ar:'شاي', en:'Tea', img:'photos/shay.jpg', price:'$0.70' },
  { id:'h2', ar:'قهوة', en:'Coffee', img:'photos/ahwe.jpg', price:'$0.70' },
  { id:'h3', ar:'زهورات', en:'Herbal Mix', img:'photos/زهورات.jpg', price:'$1.00' },
  { id:'h4', ar:'زعتر', en:'Thyme Tea', img:'photos/Thyme Tea.webp', price:'$1.00' },
  { id:'h5', ar:'مليسة', en:'Melissa', img:'photos/مليسة.jpg', price:'$1.00' },
  { id:'h6', ar:'يانسون', en:'Anise', img:'photos/يانسون.webp', price:'$1.00' },
  { id:'h7', ar:'كمون وليمون', en:'Cumin & Lemon', img:'photos/كمون وليمون.jpg', price:'$1.00' },
  { id:'h8', ar:'نسكافية', en:'Nescafé', img:'photos/نسكافية.webp', price:'$1.50' },
  { id:'h9', ar:'كاكاو', en:'Cocoa', img:'photos/کاکاو.webp', price:'$1.50' },
  { id:'h10', ar:'كابتشينو', en:'Cappuccino', img:'photos/كابتشينو.jpg', price:'$1.50' },
  { id:'h11', ar:'نسكافيه 3in1', en:'Nescafé 3in1', img:'photos/in1نسكافيه 3.webp', price:'$1.00' },
  { id:'h13', ar:'كابتشينو تيروبيكا', en:'Cappuccino Tirobica', img:'photos/torabika.png', price:'$1.00' },
  { id:'h14', ar:'شاي اخضر', en:'Green Tea', img:'photos/Green Tea.jpg', price:'$0.70' },
  { id:'h15', ar:'زنجبيل وعسل', en:'Ginger & Honey', img:'photos/زنجبيل وعسل.jpg', price:'$1.50' },
  { id:'h16', ar:'زنجبيل وحامض وعسل', en:'Ginger Lemon Honey', img:'photos/hamd aasal.jpg', price:'$1.50' },
  { id:'h17', ar:'لاتيه', en:'Latte', img:'photos/لاتیه.webp', price:'$2.00' },
  { id:'h18', ar:'امركان كافيه', en:'Americano', img:'photos/AmericanCoffee.jpg', price:'$1.00' },
    { id:'h12', ar:'نسكافية 2in1', en:'Nescafé 2in1', img:'photos/in1نسكافيه 3.webp', price:'$1.00' },
]
,

cold: [
  // 🍨 Milkshakes
  { id: 'c1', name: 'Oreo / أوريو', price: '4$', description: 'Creamy Oreo shake with a swirl of whipped cream', category: 'Milkshake', img:'photos/oreo.png' },
  { id: 'c2', name: 'Lotus / لوتس', price: '4$', description: 'Sweet Lotus shake with a caramel touch', category: 'Milkshake', img:'photos/lotus.png' },
  { id: 'c3', name: 'Chocolate / شوكولاتة', price: '3.5$', description: 'Rich chocolate shake topped with chocolate chips', category: 'Milkshake', img:'photos/choco.png' },
  { id: 'c5', name: 'Strawberry / فراولة', price: '3.5$', description: 'Fresh strawberry shake crowned with whipped cream', category: 'Milkshake', img:'photos/straw.png' },

  // 🧊 Iced Coffee
  { id: 'ic3', name: 'Iced Mocha / أيس موكا', price: '3.25$', description: 'Chocolatey iced coffee with creamy milk', category: 'Iced Coffee', img:'photos/mocha.png' },
  { id: 'ic4', name: 'Iced Caramel / أيس كراميل', price: '3.25$', description: 'Iced coffee with rich caramel flavor', category: 'Iced Coffee', img:'photos/icedcaramel.png' },
  { id: 'ic5', name: 'Iced White Mocha / أيس وايت موكا', price: '3.25$', description: 'Smooth espresso with white chocolate over ice', category: 'Iced Coffee', img:'photos/whitemochai.png' },

  // ❄️ Frappe
  { id: 'f0', name: 'Classic Frappe / كلاسيك فرابتشينو', price: '3$', description: 'Classic creamy coffee frappe', category: 'Frappe', img:'photos/van.png' },
  { id: 'f1', name: 'Tiramisu Frappe / تيراميسو فرابتشينو', price: '3.5$', description: 'Creamy tiramisu blended with espresso and ice', category: 'Frappe', img:'photos/tiramissuf.jpg' },
  { id: 'f2', name: 'Caramel Frappe / كراميل فرابتشينو', price: '3.5$', description: 'Blended caramel coffee with whipped cream', category: 'Frappe', img:'photos/caramelf.jpg' },
  { id: 'f3', name: 'Mocha Frappe / موكا فرابتشينو', price: '3.5$', description: 'Iced blend of chocolate, espresso, and milk', category: 'Frappe', img:'photos/mochaf.jpg' },
  { id: 'f4', name: 'White Mocha Frappe / وايت موكا فرابتشينو', price: '3.5$', description: 'Blended white chocolate espresso with milk and ice', category: 'Frappe', img:'photos/whitemochaf.jpg' }
],



 saj: [
  { id:'s1', ar:'صاج جبنة', en:'Cheese Saj', img:'photos/jebnesaj.png', price:'$2.00' },
  { id:'s2', ar:'صاج زعتر', en:'Za’atar Saj', img:'photos/zaatarsaj.png', price:'$1.00' },
  { id:'s3', ar:'صاج حبش وجبنة', en:'Turkey & Cheese Saj', img:'photos/saj (2).png', price:'$2.50' },
  { id:'s4', ar:'صاج قشقوان', en:'Kashkaval Saj', img:'photos/kashkaval.png', price:'$3.00' },
  { id:'s5', ar:'صاج مرتديلا', en:'Mortadella Saj', img:'photos/martadella.png', price:'$2.50' },
  { id:'s6', ar:'صاج لبنة', en:'Labneh Saj', img:'photos/labne.png', price:'$1.00' },
 
  { id:'s8', ar:'صاج قشقوان ومرتديلا', en:'Kashkaval & Mortadella Saj', img:'photos/martadellakash.png', price:'$3.00' },
  { id:'s9', ar:'صاج نيوتيلا', en:'Nutella Saj', img:'photos/nutellasaj.png', price:'$2.50' },
  { id:'s9', ar:'صاج بيكون', en:'Picon Saj', img:'photos/picon.png', price:'$1.50' }, 
  { id:'s7', ar:'صاج قشقوان وحبش', en:'Kashkaval & Turkey Saj', img:'photos/saj (2).png', price:'$3.00' },
]
,

cocktail: [
  { id: 'k0', ar: 'عصير ليمون', en: 'orange Juice', price: '$3.00' ,img:'photos/orange.png'},
  { id: 'k3', ar: 'عصير جزر', en: 'Carrot Juice', price: '$3.00' ,img:'photos/carrot.png'},
  { id: 'k4', ar: 'عصير تفاح', en: 'Apple Juice', price: '$3.00' ,img:'photos/apple.png'},
  { id: 'k5', ar: 'ليموناضة', en: 'Lemonade', price: '$3.00' , img:'photos/l.png'},
  { id: 'k6', ar: 'ليموناضة ونعنع', en: 'Lemonade Mint', price: '$4.00',img:'photos/lm.png' },
  { id: 'k7', ar: 'حليب وموز', en: 'Milk & Banana Shake', price: '$4.00' ,img:'photos/ban.png'},
  { id: 'k8', ar: 'كوكتيل فواكه', en: 'Fruit Cocktail', price: '$4.00',img:'photos/cok.png' },
  { id: 'k9', ar: 'عصير فريز', en: 'Strawberry Juice', price: '$4.00' ,img:'photos/berry.png'},
  { id: 'k10', ar: 'عصير منغا', en: 'Mango Juice', price: '$5.00' ,img:'photos/mango.png'},
  { id: 'k11', ar: 'عصير اناناس', en: 'Pineapple Juice', price: '$5.00',img:'photos/pine.png' },
  { id: 'k12', ar: 'فريز وحليب', en: 'Strawberry and milk', price: '$4.00',img:'photos/sm.png' },
  { id: 'k13', ar: 'عصير افوكا', en: 'Avocado Juice', price: '$5.00',img:'photos/avocado.png' },
  { id: 'k14', ar: 'كوكتيل اروما', en: 'Aroma Cocktail', price: '$7.00' },
],

  shisha: [
    { id: 'sh1', ar: 'ارغيلة تفاحتين', en: 'Double Apple Shisha', img: 'photos/hookah (1).png', price: '400 000L.L' },
    { id: 'sh2', ar: 'ارغيلة عنب', en: 'Grape Shisha', img: 'photos/hookah (2).png', price: '400 000L.L' },
    { id: 'sh3', ar: 'ارغيلة عنب ونعنع', en: 'Grape Mint Shisha', img: 'photos/hookah (3).png', price: '400 000L.L' },
    { id: 'sh4', ar: 'ارغيلة حامض ونعنع', en: 'Lemon Mint Shisha', img: 'photos/hookah (4).png', price: '400 000L.L' },
    { id: 'sh5', ar: 'ارغيلة Love', en: 'Love Shisha', img: 'photos/shisha.png', price: '400 000L.L' },
    { id: 'sh6', ar: 'ارغيلة عجمي', en: 'Ajami Shisha', img: 'photos/hookah (6).png', price: '500 000L.L' },
    { id: 'sh7', ar: 'خدمة ارغيلة عجمي', en: 'Ajami Shisha Service', img: 'photos/hookah (7).png', price: '250 000L.L' },
    { id: 'sh7', ar: '  راس جديد'  , en: 'Ajami Shisha Service', img: 'photos/hookah (7).png', price: '250 000L.L' },
  ],
 snacks :[
  // 🧊 براد
  { ar: 'ببسي', en: 'Pepsi', img: 'photos/pepsi.avif', price: '$1.20' },
  { ar: 'سفن اب', en: '7UP', img: 'photos/7up-.webp', price: '$1.20' },
  { ar: 'ميرندا', en: 'Mirinda', img: 'photos/miranda.avif', price: '$1.20' },
  { ar: 'لبن', en: 'Laban', img: 'photos/laban.webp', price: '$1.20' },
  { ar: 'بوم بوم', en: 'Boom Boom', img: 'photos/boomboom.jpg', price: '$1.50' },
  { ar: 'رد بول', en: 'Red Bull', img: 'photos/redbull.avif', price: '$2.20' },
  { ar: 'دارك بلو', en: 'Dark Blue', img: 'photos/db.png', price: '$1.20' },
  { ar: 'ايس تي', en: 'Ice Tea', img: 'photos/ice tea.avif', price: '$1.50' },
  { ar: 'ايس كوفي', en: 'Ice Coffee', img: 'photos/ice coffe.jpg', price: '$1.50' },
  { ar: 'فرييز', en: 'Freeze', img: 'photos/freeze.jpg', price: '$1.50' },
  { ar: 'ميلك شيك', en: 'Milkshake', img: 'photos/milkshake.jpg', price: '$1.00' },
  { ar: 'ريندو', en: 'Rindo', img: 'photos/rindo.avif', price: '$1.00' },
  { ar: 'الوفيرا', en: 'Aloe Vera', img: 'photos/aloevera.avif', price: '$2.00' },
  { ar: 'ريم غازية', en: 'Rim Sparkling', img: 'photos/rim sp.avif', price: '$1.00' },
  { ar: 'مياه ص', en: 'Water Small', img: 'photos/water small.webp', price: '$0.35' },
  { ar: 'مياه ك', en: 'Water Large', img: 'photos/water big.jpg', price: '$1.00' },
  { ar: 'ريم Fruits', en: 'Rim Fruits', img: 'photos/Rim-Web-RXF-A.jpg', price: '$1.80' },

  // 🍫 شوكولا
  { ar: 'مارس', en: 'Mars', img: 'photos/mars_twix_white_58g_prod-500x500.jpg', price: '$1.00' },
  { ar: 'سنكرز', en: 'Snickers', img: 'photos/snickers.webp', price: '$1.00' },
  { ar: 'البيني', en: 'Albeni', img: 'photos/albeni.avif', price: '$1.00' },
  { ar: 'البيني كيك', en: 'Albeni Cake', img: 'photos/cake albeni.avif', price: '$1.00' },
  { ar: 'باونتي', en: 'Bounty', img: 'photos/bounty.jpg', price: '$1.20' },
  { ar: 'تويكس', en: 'Twix', img: 'photos/twix.jpg', price: '$1.20' },
  { ar: 'كيندر', en: 'Kinder', img: 'photos/kinder-chocolate-8-pack.jpg', price: '$1.50' },
  { ar: 'كيت كات', en: 'KitKat', img: 'photos/kitkat.avif', price: '$1.00' },
  { ar: 'كيندر دليس', en: 'Kinder Delice', img: 'photos/kinder delice.jpg', price: '$1.20' },
  { ar: 'نسلة', en: 'Nestlé', img: 'photos/nestle.avif', price: '$0.50' },
  { ar: 'نسكويك', en: 'Nesquik', img: 'photos/nesquik.webp', price: '$0.50' },
  { ar: 'ستارز', en: 'Stars', img: 'photos/stars.avif', price: '$0.50' },
  { ar: 'شوكوبرنس', en: 'Choco Prince', img: 'photos/choco prince.jpg', price: '$0.70' },
  { ar: 'اونيكا', en: 'Unica', img: 'photos/unica.jpg', price: '$0.50' },
  { ar: 'ريماس كيك', en: 'Rimas Cake', img: 'photos/rimas cake.jpg', price: '$0.50' },
  { ar: 'ريماس براوني', en: 'Rimas Brownie', img: 'photos/rimas brownie.jpg', price: '$0.60' },
  { ar: 'ريماس تمر', en: 'Rimas Date Bar', img: 'photos/rimas date.jpg', price: '$0.50' },
  { ar: 'ماستر ص', en: 'Master Small', img: 'photos/master.jpg', price: '$0.50' },
  { ar: 'ماستر ك', en: 'Master Large', img: 'photos/master.jpg', price: '$1.00' }
],
pasta :[
  {
    id: 'p1',
    name: 'Spaghetti Pomodoro ',
    price: '$7.00',
    description: 'Spaghetti pasta tossed in our flavorful tomato sauce with basil, extra virgin olive oil, and grilled cherry tomatoes.',
    category: 'Pasta',
    img: 'photos/pomodoro.jpg'
  },
  {
    id: 'p2',
    name: 'Four Cheese Pasta ',
    price: '$9.00',
    description: 'Penne pasta with white creamy cheese sauce, fresh basil, cheddar cheese, mozzarella cheese, emmental, and Parmesan cheese.',
    category: 'Pasta',
    img: 'photos/four cheese pasta.jpg'
  },
  {
    id: 'p3',
    name: 'Fettuccine Alfredo Pasta ',
    price: '$10.00',
    description: 'Fettuccine pasta with fresh cream, Parmesan cheese, fresh mushrooms, and marinated grilled chicken topped with fresh parsley.',
    category: 'Pasta',
    img: 'photos/alfredo pasta.jpg'
  },
  {
    id: 'p4',
    name: 'Pesto Pasta ',
    price: '$9.00',
    description: 'Penne pasta with fresh cream, garlic, homemade pesto, and Parmesan cheese.',
    category: 'Pasta',
    img: 'photos/pink chicken pasta.jpg'
  },
  {
    id: 'p5',
    name: 'Pink Chicken Pasta  ',
    price: '$9.00',
    description: 'Penne pasta with fresh cream, tomato sauce, cherry tomatoes, marinated grilled chicken, and mixed cheese.',
    category: 'Pasta',
    img: 'photos/spaghetti pomodoro.jpg'
  },
  {
    id: 'p6',
    name: 'Pink Shrimp Pasta ',
    price: '$10.00',
    description: 'Penne pasta with fresh cream, garlic tomato sauce, garlic butter, and Parmesan cheese.',
    category: 'Pasta',
    img: 'photos/pink shrimp pasta.jpg'
  }

],
 desserts: [
    {
      category_en: "Rolled Ice Cream",
      category_ar: "آيس كريم رول",
      img: "photos/icecream.png", // one image for the whole category
      items: [
        { 
          name_en: "Nutella Oreo Lotus White", 
          name_ar: "نوتيلا، أوريو، لوتس، وايت", 
          price: 6,
          description: "Rolled ice cream with Nutella, Oreo, Lotus White, served with toppings."
        },
        { 
          name_en: "Blackberry Blueberry Raspberry Strawberry", 
          name_ar: "توت أسود، توت أزرق، توت أحمر، فراولة", 
          price: 6,
          description: "Mixed berry rolled ice cream with fresh fruits and sweet syrup."
        },
        { 
          name_en: "Mango Lotus Nutella", 
          name_ar: "مانجو، لوتس، نوتيلا", 
          price: 5,
          description: "Refreshing mango ice cream with Lotus and Nutella drizzle."
        },
        { 
          name_en: "Strawberry Oreo Nutella", 
          name_ar: "فراولة، أوريو، نوتيلا", 
          price: 5,
          description: "Strawberry flavored rolled ice cream topped with Oreo and Nutella."
        },
        { 
          name_en: "Raspberry White Chocolate Lotus", 
          name_ar: "توت أحمر، شوكولاتة بيضاء، لوتس", 
          price: 6,
          description: "Raspberry ice cream with white chocolate and Lotus crumbs."
        }
      ]
    },
    {
      category_en: "Mini Pancakes",
      category_ar: "ميني بان كيك",
      img: "photos/minip.png",
      items: [
        { 
          name_en: "10 Pcs of Mini Pancakes - Nutella Oreo Lotus", 
          name_ar: "10 قطع ميني بان كيك - نوتيلا، أوريو، لوتس", 
          price: 5,
          description: "Ten mini pancakes served with Nutella, Oreo, and Lotus topping."
        },
        { 
          name_en: "Kinder  Lotus White", 
          name_ar: "كيندر، لوتس، وايت", 
          price: 6,
          description: "Mini pancakes with Kinder chocolate, Lotus, and White cream."
        },
        { 
          name_en: "Nutella Lotus  Oreo White", 
          name_ar: "نوتيلا، لوتس، أوريو، وايت", 
          price: 6,
          description: "Delicious mini pancakes with Nutella, Lotus, Oreo, and White chocolate."
        },
        { 
          name_en: "Belgian Chocolate White Strawberry", 
          name_ar: "شوكولاتة بلجيكية، وايت، فراولة", 
          price: 6,
          description: "Belgian chocolate pancakes with white chocolate and fresh strawberry."
        },
        { 
          name_en: "Ramadan Mini Pancakes - Pistachio White Chocolate Cotton Candy topped with Nuts and Kashta Gelato", 
          name_ar: "فستق، شوكولاتة بيضاء، غزل البنات، مغطاة بالمكسرات وكشتة جيلاتو", 
          price: 7,
          description: "Festive mini pancakes with pistachio, white chocolate, cotton candy, nuts, and kashta gelato."
        }
      ]
    },
    {
      category_en: "Cups",
      category_ar: "كوب",
      img: "photos/brownies.png",
      items: [
        { 
          name_en: "Andy's Cup - Brownie Nutella White Strawberry Banana Whipped Cream", 
          name_ar: "آندي - براوني، نوتيلا، وايت، فراولة، موز، كريمة مخفوقة", 
          price: 5,
          description: "Cup dessert with brownie, Nutella, white chocolate, strawberry, banana, and whipped cream."
        },
        { 
          name_en: "Andy's Cup with Gelato - Brownie Nutella White Strawberry Banana Vanilla Gelato", 
          name_ar: "آندي مع جيلاتو - براوني، نوتيلا، وايت، فراولة، موز، فانيلا جيلاتو", 
          price: 6,
          description: "Cup dessert with brownie, Nutella, white chocolate, strawberry, banana, and vanilla gelato."
        },
        { 
          name_en: "Othmaleye Cup - 2 Scoops Gelato, Kashta, Kunafa, Pistachio and Nutella", 
          name_ar: "عثملية - سكوبين جيلاتو، كشتة، كنافة، فستق، نوتيلا", 
          price: 5,
          description: "Cup with gelato, kashta, kunafa, pistachio, and Nutella toppings."
        },
        { 
          name_en: "Daokeyeh Cup - Daokeyeh Dough with Gelato Kashta topped with Nutella, Pistachios and Nuts", 
          name_ar: "داوكية - عجينة داوكية مع جيلاتو وكشتة ومغطاة بنوتيلا وفستق ومكسرات", 
          price: 5,
          description: "Cup dessert featuring Daokeyeh dough with gelato, kashta, Nutella, pistachios, and nuts."
        }
      ]
    },
    {
      category_en: "Crepe",
      category_ar: "كريب",
      img: "photos/crepe.png",
      items: [
        { 
          name_en: "Nutella, White, Oreo", 
          name_ar: "نوتيلا / وايت /  أوريو", 
          price:  "5$",
          description: "Crepe filled with Nutella, white chocolate, and Oreo pieces."
        },
        { 
          name_en: "Lotus Kinder White", 
          name_ar: "لوتس/ كيندر/ وايت", 
          price:  "6$",
          description: "Crepe with Lotus, Kinder, and white chocolate."
        },
        { 
          name_en: "Belgian and White", 
          name_ar: "بلجيكي ووايت", 
          price:  "5$",
          description: "Belgian chocolate and white chocolate filled crepe."
        },
        { 
          name_en: "Dubai Crepe - Pistachio and Kunafa topped with Belgian and White", 
          name_ar: "كريب دبي - فستق وكنافة مغطاة بشوكولاتة بلجيكية ووايت", 
          price: "7$",
          description: "Dubai style crepe with pistachio, kunafa, Belgian and white chocolate toppings."
        }
      ]
    }
  ]


};
