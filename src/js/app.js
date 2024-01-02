
// import CategoryView from './CategoryView.js';

// document.addEventListener('DOMContentLoaded', () => {
//   CategoryView.setApp();
//   console.log(CategoryView);
//   //create categories option
//   CategoryView.createCategoriesList(); //
// });

//target:
//1.create category
//2.create product based on category
//3.execute CRUD In App
//=> storage class for handle application method
//product view class
//categoryViw Class
//Main and App Class


import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
  // setApp => categories : OK
  CategoryView.setApp();
  ProductView.setApp();
  // create categories options
  CategoryView.createCategoriesList();
  //
  ProductView.createProductsList(ProductView.products);
});