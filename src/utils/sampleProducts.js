// sampleProducts.js
import ShrimpBurger from "./ShrimpBurger.png"
import redBeets from "./redBeets.png"
import avocrazy from "./avocrazy.png"
import pancake from "./pancake.png"
const sampleProducts = [
    {
      id: 1,
      name: 'Shrimp Burger',
      weight: '350g',
      description: 'Wheat bun, crispy shrimps, pickles, seafood sauce',
      price: 17.99,
      image: ShrimpBurger, // Replace with actual image URL
      category:'Main courses'
    },
    {
      id: 2,
      name: 'Red Beets Burger',
      weight: '350g',
      description: 'Red bun, beef patty, corn, lettuce, mayo sauce',
      price: 12.99,
      image: redBeets,
    },
    {
      id: 3,
      name: 'Avocrazy Burger',
      weight: '350g',
      description: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: 12.99,
      image: avocrazy,
    },
    {
      id: 4,
      name: 'pancake',
      weight: '230g',
      description: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: 4.99,
      image: pancake,
    },
    // Add more products as needed
  ];
  
  export default sampleProducts;
  