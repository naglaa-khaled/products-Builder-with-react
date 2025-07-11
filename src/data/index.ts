import type { IProduct, IFormInput } from "../components/interfaces";
import {v4 as uuid} from "uuid"

export const ProductList: IProduct[] = [
  {
    id: uuid(),
    title: "Velvet Charm Heeled Sandals",
    description:
      "Stay active in style with breathable knit sneakers that blend fashion and function. Whether you're running errands or grabbing coffee, these shoes keep you comfortable all day long.",
    imgUrl: "https://images.pexels.com/photos/26772104/pexels-photo-26772104.jpeg",
    price: "$900,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/26772104/pexels-photo-26772104.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Urban Breeze Knit Sneakers",
    description:
      "Step into elegance with these velvet heels, crafted for nights that deserve a touch of luxury. With a graceful ankle strap and plush texture, they're your go-to for dinner dates or dressy occasions.",
    imgUrl:
      "https://images.pexels.com/photos/26712439/pexels-photo-26712439.jpeg",
    price: "$700,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/26712439/pexels-photo-26712439.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Classic Comfort Ballet Flats",
    description:
      "A timeless essential. Soft, cushioned, and effortlessly versatile—perfect for the office, weekend strolls, or matching with casual dresses.",
    imgUrl:
      "https://images.pexels.com/photos/27113458/pexels-photo-27113458.jpeg",
    price: "$1000,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/27113458/pexels-photo-27113458.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Sunlit Stride Wedge Sandals",
    description:
      "These light-as-air wedges add just the right lift for sunny afternoons. The woven design and cork sole bring boho vibes to your everyday look.",
    imgUrl:
      "https://images.pexels.com/photos/27100521/pexels-photo-27100521.jpeg",
    price: "$800,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/27100521/pexels-photo-27100521.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Trail Chic Ankle Boots",
    description:
      "Rugged meets refined. Designed for cooler weather, these ankle boots feature sturdy soles and sleek faux leather to elevate your autumn wardrobe.",
    imgUrl:
      "https://images.pexels.com/photos/27658532/pexels-photo-27658532.jpeg",
    price: "$1500,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/27658532/pexels-photo-27658532.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Midnight Spark Pointed Pumps",
    description:
      "Make a statement after dark with these bold pointed pumps featuring a shimmering finish. Sophisticated and sharp, ideal for upscale events or parties.",
    imgUrl:
      "https://images.pexels.com/photos/27381284/pexels-photo-27381284.png",
    price: "$2000,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/27381284/pexels-photo-27381284.png",
    },
  },
  {
    id: uuid(),
    title: "Cloud Step Slip-On Trainers",
    description:
      "Your feet will thank you. These lightweight slip-ons are engineered with a soft inner lining and memory foam insoles—perfect for daily wear with a sporty twist.",
    imgUrl:
      "https://images.pexels.com/photos/26925257/pexels-photo-26925257.jpeg",
    price: "$1200,000",
    colors: [],
    category: {
      name: "string",
      imgUrl:
        "https://images.pexels.com/photos/26925257/pexels-photo-26925257.jpeg",
    },
  },
];
export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "product title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "product description",
    type: "text",
  },
  {
    id: "image",
    name: "imgUrl",
    label: "product image",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "product price",
    type: "text",
  },
];
export const Colors:string[] = [
  "#78B9B5",
  "#0F828C",
  "#320A6B",
  "#DC3C22",
  "#EAC8A6",
  "#FE7743",
  "#0A400C",
  "#D9A299",
  "#819067",
  "#BA487F",
  "#FF9587",
  "#A4DD00",
  "#901E3E",
  "#819A91",
  // "#B33791",
  // "#AEC8A4",
  // "#ECFAE5",
];
