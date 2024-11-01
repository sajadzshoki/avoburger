import { nanoid } from "nanoid";
import ShrimpBurger from "./images/ShrimpBurger.png"
import redBeets from "./images/redBeets.png"
import avocrazy from "./images/avocrazy.png"
import pancake from "./images/pancake.png"
import coffee from "./images/coffee.png"
import teriyaki from "./images/teriyaki.png"
import kimchifries from "./images/kimchifries.png"

function RandomWeight(min = 100, max = 450) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomPrice(min = 0.99, max = 20) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sampleProducts = [
    {
      id: nanoid(),
      name: 'Shrimp Burger',
      weight: RandomWeight(),
      calories:"352",
      tags: 'Wheat bun, crispy shrimps, pickles, seafood sauce',
      price: RandomPrice(),
      image: ShrimpBurger, 
      category:'Main courses',
      vegan:false
      
    },
    {
      id: nanoid(),
      name: 'Red Beets Burger',
      weight: RandomWeight(),
      calories:"782",
      tags: 'Red bun, beef patty, corn, lettuce, mayo sauce',
      price: RandomPrice(),
      image: redBeets,
      category:'Main courses',
      vegan:true
      
    },
    {
      id: nanoid(),
      name: 'Avocrazy Burger',
      weight: RandomWeight(),
      calories:"423",
      tags: 'Wheat bun, veggie patty, avocado, cabbage, lettuce',
      price: RandomPrice(),
      image: avocrazy,
      category:'Main courses',
      vegan:false
      
    },
    {
      id: nanoid(),
      name: 'pancake',
      weight: RandomWeight(),
      calories:"123",
      tags: 'flour , strawberry , sauce',
      price: RandomPrice(),
      image: pancake,
      category:'Side dishes',
      vegan:false
      
    },
    {
      id:nanoid(),
      name: 'coffee',
      weight: RandomWeight(),
      calories:"254",
      tags: 'coffee , milk , suger',
      price: RandomPrice(),
      image: coffee,
      category:'Drinks',
      vegan:true
      
    },
    {
      id:nanoid(),
      name: 'Teriyaki Burger',
      weight: RandomWeight(),
      calories:"300",
      tags: 'Black bun , tuna steak , tomato , lettuce , teriyaki sauce',
      price: RandomPrice(),
      image: teriyaki,
      category:'Main courses',
      vegan:false
      
    },
    {
      id:nanoid(),
      name: 'Kimchi Fries',
      weight: RandomWeight(),
      calories:"280",
      tags: 'potatos , korean kimchi , salt , coriander',
      price: RandomPrice(),
      image: kimchifries,
      category:'Side dishes',
      vegan:true
      
    },
 
  ];
  
  export default sampleProducts;
  