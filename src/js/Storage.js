const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2021-10-31T15:03:23.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2021-11-01T10:47:26.889Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of the applications",
    createdAt: "2021-10-01T10:47:26.889Z",
  },
];

// export default class Storage{
//   //property
//   //save,delete,update,...
//   //add new category
//   //save category
//   //getAllCategories

//   static getAllCategories() {
//     //products,category=> localStorage=>
//     const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
//     //sort=>نزولی=>descnding
//     //1,2,3,4,5,6
//     const sortedCategories = savedCategories.sort((a, b) => {
//       //for sort catagories based on createAt we use from Date Method and take instance from it
//       return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
//       //sort based on asc if a<b
//       //sort based on desc if <b

//     });
//     return sortedCategories;
//   }
//   //create new category and save new category in local storage
 
//   static saveCategory(categoryToSave) {
    
//     //FIRST CHECK SAVED CATEGORIES
//     const savedCategories = Storage.getAllCategories();
//     //edit...=>save
//     //new=>...save
//     //for check exist category we use Find method

//     const existedItem = savedCategories.find(c => c.id === categoryToSave.id);
//     //if an exit go edit category founded
//     if (existedItem) {
      
//       existedItem.title = categoryToSave.title;
//       existedItem.description = categoryToSave.description;
//     }
//     //if have new category
//     else {
//       //we add 2 property push to an object category
//       //push createdAt and Generate new id

//       //new category
//       //we set 2 property for new Category
//       categoryToSave.id = new Date().getTime();
//       categoryToSave.createdAt = new Date().toISOString();
     
//       savedCategories.push(categoryToSave);


//     }
    
//     //after edit and created new category we should save in localStorage into savedCategories
//     localStorage.setItem('category',JSON.stringify(savedCategories));

//   }

//   // FOR PRODUCTS
  
//   static getAllProducts() { //products,category=> localStorage=>

//     const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
//     //sort=>نزولی=>descnding
//     //1,2,3,4,5,6
//     return savedProducts = savedProducts.sort((a, b) => {
//       //for sort catagories based on createAt we use from Date Method and take instance from it
//       return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
//       //sort based on asc if a<b
//       //sort based on desc if <b

//     });
 
    
//   }

//   static saveProducts(productsToSave) {

//     //FIRST CHECK SAVED CATEGORIES
//     const savedProducts = localStorage.getAllProducts();
//     //edit...=>save
//     //new=>...save
//     //for check exist products we use Find method

//     const existedItem = savedProducts.find(p => p.id === productsToSave.id);
//     //if an exit go edit products founded
//     if (existedItem) {

//       existedItem.title = productsToSave.title;
//       existedItem.quantity = productsToSave.quantity;
//       existedItem.category = productsToSave.category;
//     }
//     //if have new products
//     else {
//       //we add 2 property push to an object products
//       //push createdAt and Generate new id

//       //new products
//       //we set 2 property for new products
//       productsToSave.id = new Date().getTime();
//       productsToSave.createdAt = new Date().toISOString();

//       savedProducts.push(productsToSave);


//     }

//     //after edit and created new category we should save in localStorage into savedProducts
//     localStorage.setItem('products', JSON.stringify(savedProducts));

//   }





// }

export default class Storage {
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    // edit => ... save
    // new => ... save
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      // new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts(sort = "newest") {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    // newest : default
    return savedProducts.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  }
  static saveProducts(productToSave) {
    const savedProducts = Storage.getAllProducts();
    // edit => ... save
    // new => ... save
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      // edit
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      // new
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("products", JSON.stringify(savedProducts));
  }
  static deleteProduct(id) {
    console.log(typeof id);
    const savedProdocuts = Storage.getAllProducts();
    const filteredProducts = savedProdocuts.filter((p) => p.id !== parseInt(id));
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  }
}