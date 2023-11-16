
import CategoryView from './CategoryView.js';

document.addEventListener('DOMContentLoaded ', () => {
  CategoryView.setApp();
  console.log(CategoryView);
  //create categories option
  CategoryView.createCategoriesList(); //
});


class App{

}

//target:
//1.create category
//2.create product based on category
//3.execute CRUD In App
//=> storage class for handle application method
//product view class
//categoryViw Class
//Main and App Class