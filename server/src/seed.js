import 'dotenv/config'; import mongoose from 'mongoose'; import {connectDB} from './config/db.js'; import Product from './models/Product.js';
const products=[
{name:'Everyday Canvas Tote',category:'Accessories',price:799,stock:25,featured:true,description:'A sturdy carry-all for work, errands and weekends.'},
{name:'Ceramic Morning Mug',category:'Home',price:449,stock:30,featured:true,description:'A comfortable, handmade-inspired mug for slow mornings.'},
{name:'Desk Companion Notebook',category:'Stationery',price:299,stock:40,description:'A clean, minimal notebook for notes and new ideas.'},
{name:'Soft Cotton Cap',category:'Accessories',price:599,stock:18,description:'A simple everyday cap with a relaxed fit.'},
{name:'Minimal Desk Lamp',category:'Home',price:1499,stock:12,featured:true,description:'Warm light for focused work and quiet evenings.'},
{name:'Reusable Water Bottle',category:'Lifestyle',price:699,stock:22,description:'A reliable bottle to keep close throughout the day.'},
{name:'Pocket Planner',category:'Stationery',price:349,stock:32,description:'Keep plans and priorities within easy reach.'},
{name:'Everyday Crossbody',category:'Accessories',price:1299,stock:9,description:'A compact bag for the essentials.'}
];
try{await connectDB(process.env.MONGO_URI);await Product.deleteMany({});await Product.insertMany(products);console.log('Seeded ShopSphere products');await mongoose.disconnect();}catch(e){console.error(e);process.exit(1)}
