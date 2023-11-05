const products = [
  {
    id: 1,
    category:"frontend",
    title: "reactjs",
    createdAt: "2023-11-03T00:00:00.000Z"
  },
  {
    id: 2,
    category: "Backend",
    title: "Node.js",
    createdAt: "2023-11-05T14:48:00.000"

  },
  {
    id:3,
    category: "frontendd",
    title: "vue.js",
    createdAt: "2023-11-06T14:55:00.000"
    
  }
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "this is frontend category",
    createAt:"2023-11-01T16:59:00.000",
  },
  {
    id: 2,
    title: "backend",
    description: "this is backend category",
    createAt: "2023-11-02T16:12:00.000",
  }
];

export default class Storage{
  //property
  //save,delete,update,...
  //add new category
  //save category
  //getAllCategories

  static getAllCategories() {
    //products,category=> localStorage=>
    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    //sort=>نزولی=>descnding
    //1,2,3,4,5,6
    const sortedCategories = savedCategories.sort((a, b) => {
      //for sort catagories based on createAt we use from Date Method and take instance from it
      return new Date(a.createAt) < new Date(b.createAt) ? -1 : 1;
      //sort based on asc if a<b
      //sort based on desc if <b

    });
    return sortedCategories;
  }
  //create new category and save new category in local storage
 
  static saveCategory(categoryToSave) {
    
    //FIRST CHECK SAVED CATEGORIES 
    const savedCategories = localStorage.getAllCategories(); 
    //edit...=>save
    //new=>...save
    //for check exist category we use Find method

    const exitedItem = savedCategories.find(c => c.id === categoryToSave.id);
    //if an exit go edit category founded
    if (exitedItem) {
      
      exitedItem.title = categoryToSave.title;
      exitedItem.description = categoryToSave.description;
    }
    //if have new category
    else {
      //we add 2 property push to an object category
      //push createdAt and Generate new id 

      //new category
      //we set 2 property for new Category
      categoryToSave.id = new Date().getTime();
      categoryToSave.createAt = new Date().toISOString();
     
      savedCategories.push(categoryToSave);


    }
    
    //after edit and created new category we should save in localStorage into savedCategories
    localStorage.setItem('category',JSON.stringify(savedCategories));

  }

  // FOR PRODUCTS
  
  static getAllProducts() { //products,category=> localStorage=>

    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    //sort=>نزولی=>descnding
    //1,2,3,4,5,6
    return sortedProducts = savedProducts.sort((a, b) => {
      //for sort catagories based on createAt we use from Date Method and take instance from it
      return new Date(a.createAt) < new Date(b.createAt) ? -1 : 1;
      //sort based on asc if a<b
      //sort based on desc if <b

    });
 
    
  }

  static saveProducts(productsToSave) {

    //FIRST CHECK SAVED CATEGORIES 
    const savedCategories = localStorage.getAllCategories();
    //edit...=>save
    //new=>...save
    //for check exist products we use Find method

    const exitedItem = savedProducts.find(p => p.id === productsToSave.id);
    //if an exit go edit products founded
    if (exitedItem) {

      exitedItem.title = productsToSave.title;
      exitedItem.quantity = productsToSave.quantity;
      exitedItem.category = productsToSave.category;
    }
    //if have new products
    else {
      //we add 2 property push to an object products
      //push createdAt and Generate new id 

      //new products
      //we set 2 property for new products
      productsToSave.id = new Date().getTime();
      productsToSave.createAt = new Date().toISOString();

      savedProducts.push(productsToSave);


    }

    //after edit and created new category we should save in localStorage into savedProducts
    localStorage.setItem('category', JSON.stringify(savedProducts));

  }





}