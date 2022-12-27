let menu = [
  {
    id: 1,
    title: "Buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Dinner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "American classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuItems = document.querySelector(".menu-items");

const allItems = document.querySelector(".all-items");

const breakfastItems = document.querySelector(".breakfast-items");

const lunchItems = document.querySelector(".lunch-items");

const shakeItems = document.querySelector(".shakes");

const photo = document.querySelector(".photo");

var contentAll = [];
var contentBreakfast = [];
var contentLunch = [];
var contentShakes = [];

var contentShown = [];


window.addEventListener("DOMContentLoaded", loader(menu));

function allBtns() {
  for (let n = 0; n < menu.length; n++) {
    contentShown.push(menu[n].category);
  }
  for (let m = 0; m < contentShown.length; m++) {
    if (contentShown[m] === "breakfast") {
      contentBreakfast.push(menu[m]);
    } else if (contentShown[m] === "lunch") {
      contentLunch.push(menu[m]);
    } else if (contentShown[m] === "shakes") {
      contentShakes.push(menu[m]);
    }
  }
}

function loader(x) {
  for (let i = 0; i < x.length; i++) {
    menuItems.innerHTML += `<div class="menu-item" >
      <div class="photo" style="background-image: url(${x[i].img});">
      </div>
      <article>
        <header>
          <h2>${x[i].title}</h2>
          <p>$ ${x[i].price}</p>
        </header>
        <p>${x[i].desc}
        </p>
      </article>
      </div>`;
  }
}

allBtns();



console.log(contentShakes);

breakfastItems.addEventListener("click", function(){
  menuItems.innerHTML=``;
  console.log(contentBreakfast);
  loader(contentBreakfast);

});

lunchItems.addEventListener("click", function(){
  menuItems.innerHTML=``;
  console.log(contentLunch);
  loader(contentLunch);

});

shakeItems.addEventListener("click", function(){
  menuItems.innerHTML=``;
  console.log(contentShakes);
  loader(contentShakes);
});

allItems.addEventListener("click", function(){
  menuItems.innerHTML=``;
  console.log(menu);
  loader(menu);
});
