const product = [
  {
    id: 1,
    image: 'image/gg-1.jpg',
    title: 'Z Flip Foldable Mobile',
    price: 120,
    category: 'mobile'
  },
  {
    id: 1,
    image: 'image/hh-2.jpg',
    title: 'Air Pods Pro',
    price: 60,
    category: 'airpods'
  },
  {
    id: 1,
    image: 'image/ee-3.jpg',
    title: '250D DSLR Camera',
    price: 230,
    category: 'cameras'
  },
  {
    id: 2,
    image: 'image/gg-2.jpg',
    title: 'Foldable Mobile',
    price: 300,
  },
  {
    id: 2,
    image: 'image/hh-3.jpg',
    title: 'Air Pods Pro',
    price: 65,
  },
  {
    id: 2,
    image: 'image/ee-2.jpg',
    title: 'DSLR Camera',
    price: 200,
    category: 'cameras'
  },
  {
    id: 3,
    image: 'image/dd-2.jpg',
    title: 'Laptop',
    price: 100,
    category: 'Laptops'
  },
  {
    id: 3,
    image: 'image/gg-3.jpg',
    title: 'Mobile',
    price: 350,
  },
  {
    id: 3,
    image: 'image/ee-1.jpg',
    title: 'DSLR Camere',
    price: 130,
    category: 'cameras'
  },
];

const categories = [...new Set(product.map(item => item))];
const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map(item => {
    var {image, title, price} = item;
    return (`
      <div class='box'>
        <div class='img-box'>
          <img class='images' src=${image} />
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>${price}</h2>
          <button>Add to cart</button>
        </div>
      </div> 
    `)
  }).join('');
}

const filterFirstCategory = categories.filter(item);

function item(value) {
  if (value.id === 1) {
    return value.id;
  }
}

displayItem(filterFirstCategory);

const btns = [
  {
    id: '1',
    name: '<<',
  },
  {
    id: '1',
    name: '1',
  },
  {
    id: '2',
    name: '2',
  },
  {
    id: '3',
    name: '3',
  },
  {
    id: '3',
    name: '>>',
  },
];

const filters = [... new Set(btns.map(btn => btn))];

document.getElementById('btns').innerHTML = filters.map(btn => {
  var {id, name} = btn;
  return(`
    <button class='fil-p' onclick='filterItems(${id})'>${name}</button>
  `)
}).join('');

const filterItems = (a) => {
  const filterCategories = categories.filter(item);
  function item(value) {
    if (value.id === a) {
      return value.id;
    }
  }
  displayItem(filterCategories);
}