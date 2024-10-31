import { nanoid } from "nanoid";
import ShrimpBurger from "./ShrimpBurger.png"
import redBeets from "./redBeets.png"
import avocrazy from "./avocrazy.png"
import pancake from "./pancake.png"
import coffee from "./coffee.png"
const sampleProducts = [
    {
      id: nanoid(),
      name: 'Shrimp Burger',
      weight: '350',
      tags: 'Wheat bun, crispy shrimps, pickles, seafood sauce',
      price: 17.99,
      image: ShrimpBurger, 
      category:'Main courses',
      
    },
    {
      id: nanoid(),
      name: 'Red Beets Burger',
      weight: '350',
      tags: 'Red bun, beef patty, corn, lettuce, mayo sauce',
      price: 12.99,
      image: redBeets,
      category:'Main courses',
      
    },
    {
      id: nanoid(),
      name: 'Avocrazy Burger',
      weight: '350',
      tags: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: 12.99,
      image: avocrazy,
      category:'Main courses',
      
    },
    {
      id: nanoid(),
      name: 'pancake',
      weight: '230',
      tags: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: 4.99,
      image: pancake,
      category:'Side dishes',
      
    },
    {
      id:nanoid(),
      name: 'coffee',
      weight: '230',
      tags: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: 3.5,
      image: coffee,
      category:'Drinks',
      
    },
 
  ];
  
  export default sampleProducts;
  