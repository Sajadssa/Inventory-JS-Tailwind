//1. for  add new category we should take title and description from dom and save in categories
//title,description =>{}=>saveCategory

import Storage from './Storage.js'

const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");

//define class for categoryView that describe properties and method occur in category like add new,delete,update Category
//because e need category for product so we it default export
class CategoryView {
  //when create instance from this class go attach eventlistener to button add-new-category -for initialize values here input date by user 
  constructor() {

    //event object: consist of type event and the element had clicked and this is an object event at summery consist of information about event
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e));
    //for show allCategories when click button sync
    this.categories = [];

  }

  //add new category
  addNewCategory(e) {
    //for prevent refresh browser
    e.preventDefault();
    const title = categoryTitle.value;
    const description = categoryDescription.value;
    //if title and description are null that mean is falsy
    if (!title || !description) return;
    //not  execute code after return
    //for save new category
    Storage.saveCategory({ title, description });//3=>4
    this.categories = Storage.getAllCategories();
    //update DOM: update select option in categories
    this.createCategoriesList();



  }

  //set new method

  setApp() {
    this.categories = Storage.getAllCategories();
  }

  //new method for update select option in category

  //make dynamic select option

  createCategoriesList() {

    // categories is an array of objects so we use foreach method for render data in select option based on ``  template literal

    let result=`<option class="bg-transparent text-slate-200" value="">
                  Select a category
                </option>`;
    this.categories.forEach((element) => {
      result+=`<option class="bg-transparent text-slate-500" 
value=${element.id}>
                  ${element.title}
                </option>`;

    });

    const categoryDOM = document.getElementById("product-category");
    categoryDOM.innerHTML = result;

  }

}

//instance from class CategoryView
//for not need every instance from this class so we export default based on new instance new categoryView

export default new CategoryView();

