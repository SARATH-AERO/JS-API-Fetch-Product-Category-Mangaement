

function addCategory() {
     let name = document.querySelector("#categoryName").value;

     let api = `https://localhost:7192/Category/add a category?category_name=${name}`;
     let responseText = document.querySelector("#addCategoryResponse");

     fetch(api, {
          method : 'POST',
          headers: {
               'Content-Type': 'application/json'
           },
          body : ""
     }).then(response => {
               return response.text();    
               
          }).then( responseText1 => {
               responseText.textContent = responseText1;
          })
          
          
          
          .catch(error => {
          responseText.textContent = error;
          console.log(error);
     })
          

}




function getAllCategory(){
     let tableBody = document.querySelector("#myTable1")
     let tbody = tableBody.querySelector('tbody');
     tbody.innerHTML = "";

     let temp = 'https://localhost:7192/Category/get all category';
     fetch(temp)
     .then(response => {
          return response.json();
     }).then( data => {
     // let res = JSON.stringify(data);
          for (let key in data) {
               console.log(key + ': ' + data[key]);
               let j = 0;
               const row = tableBody.insertRow();
               for( let i in data[key]){
          
               console.log(i + ': ' + data[key][i]);

               const cell = row.insertCell(j++);
    
               cell.textContent = data[key][i];
         
               }

          }
     })
     .catch( error => {
          console.log(error);
     })

}

function getAllProductunderCategory(){
     let tableBody = document.querySelector("#getAllProductunderCategoryTable")
     let tbody = tableBody.querySelector('tbody');
     tbody.innerHTML = "";

     let categoryName = document.getElementById("cnameongetAllProductunderCategory").value;

     let temp = `https://localhost:7192/Category/get all products under the category?name=${categoryName}`;
     fetch(temp)
     .then(response => {
          return response.json();
     }).then( data => {
     // let res = JSON.stringify(data);
          for (let key in data) {
               console.log(key + ': ' + data[key]);
               let j = 0;
               const row = tableBody.insertRow();
               for( let i in data[key]){
          
               console.log(i + ': ' + data[key][i]);

               const cell = row.insertCell(j++);
    
               cell.textContent = data[key][i];
         
               }

          }
     })
     .catch( error => {
          console.log(error);
     })

}

function removeCategory(){
     let name = document.querySelector("#removeCategoryName").value;
     let removeCategoryResponse = document.querySelector("#removeCategoryResponse");
     if(name === ""){
          removeCategoryResponse.textContent = "enter the category name";
          return;
     }

     let api = `https://localhost:7192/Category/delete category and all related products?name=${name}`;

     fetch(api, {
          method : "DELETE",
          headers : {
               "Content-Type" : "application/json"
          },
          body : ""
     }). then ( response =>{
          return response.text();
     }) .then ( responseText => {
          removeCategoryResponse.textContent = responseText;
     })



}




function addProduct(){

     let divProduct = document.querySelector("#addProduct");
     let productName = divProduct.querySelector("#name").value;
     let productPrice = divProduct.querySelector("#price").value;
     let productQuantity = divProduct.querySelector("#quantity").value;
     let productDescription = divProduct.querySelector("#description").value;
     let productCategoryName = divProduct.querySelector("#categoryName").value;
     let addProductResponse = divProduct.querySelector("#addProductResponse");


     if( productName === "" || productPrice === "" || productQuantity === "" || productDescription === "" || productCategoryName === ""){
          addProductResponse.textContent = "must fill all product details";
          return;
     }


     const productObject = {
          "name": productName,
          "price": productPrice,
          "quantity": productQuantity,
          "description": productDescription,
           "categoryName": productCategoryName
     }

     const jsonObject = JSON.stringify(productObject);
     let api = "https://localhost:7192/Product/add product";

     fetch(api, {
          method : "POST",
          headers : {
               "content-type" : "application/json"
          },
          body : jsonObject
     }).then ( response => {
          return response.text();
     }). then( responseText =>{
          addProductResponse.textContent = responseText;
     })





}


function getAllProduct(){
     let tableBody = document.querySelector("#myTable")
     let tbody = tableBody.querySelector('tbody');
     tbody.innerHTML = "";

     let temp = "https://localhost:7192/Product/get all products";
     fetch(temp)
     .then(response => {
          return response.json();
     }).then( data => {
     // let res = JSON.stringify(data);
          for (let key in data) {
               console.log(key + ': ' + data[key]);
               let j = 0;
               const row = tableBody.insertRow();
               for( let i in data[key]){
          
               console.log(i + ': ' + data[key][i]);

               const cell = row.insertCell(j++);
    
               cell.textContent = data[key][i];
         
               }

          }
     })
     .catch( error => {
          console.log(error);
     })

}


function getProductDetailsByName(){
     let tableBody = document.querySelector("#getProductDetailsByNameTable")
     let tbody = tableBody.querySelector('tbody');
     tbody.innerHTML = "";

     let productName = document.getElementById("cnameongetProductDetails").value;

     let temp = `https://localhost:7192/Product/get product by name?name=${productName}`;
     fetch(temp)
     .then(response => {
          return response.json();
     }).then( data => {
     // let res = JSON.stringify(data);
          // for (let key in data) {
          //      console.log(key + ': ' + data[key]);
          //      let j = 0;
               const row = tableBody.insertRow();
               for( let i in data){
          
               console.log(i + ': ' + data[i]);

               const cell = row.insertCell(0);
    
               cell.textContent = data[i];
         
               }

          // }
     })
     .catch( error => {
          console.log(error);
     })

}


function updateProduct1(){
    
     let divProduct = document.querySelector("#updateProduct");
     let productName = divProduct.querySelector("#name").value;
     let productPrice = divProduct.querySelector("#price").value;
     console.log(productPrice);
     let productQuantity = divProduct.querySelector("#quantity").value;
     let addProductResponse = divProduct.querySelector("#updateProductResponse");


     if( productName === "" ||  (productPrice === "" && productQuantity === "")  ){
          addProductResponse.textContent = "must fill product name and either product price of produt quantity details";
          return;
     }

     let api;
     if(productName != "" && productPrice != "" && productQuantity != "")
          api = `https://localhost:7192/Product/update product details?name=${productName}&price=${productPrice}&quantity=${productQuantity}`;
     else if(productName != "" && productPrice != "")
          api = `https://localhost:7192/Product/update product details?name=${productName}&price=${productPrice}`;
     else 
          api = `https://localhost:7192/Product/update product details?name=${productName}&quantity=${productQuantity}`;

     fetch(api, {
          method : "PUT",
          headers : {
               "content-type" : "application/json"
          },
          body : ""
     }).then ( response => {
          return response.text();
     }). then( responseText =>{
          addProductResponse.textContent = responseText;
     })


 
}


function removeProduct(){
     let name = document.querySelector("#removeProductName").value;
     let removeCategoryResponse = document.querySelector("#removeProdcutResponse");
     if(name === ""){
          removeCategoryResponse.textContent = "enter the product name";
          return;
     }

     let api = `https://localhost:7192/Product/delete product?name=${name}`;

     fetch(api, {
          method : "DELETE",
          headers : {
               "Content-Type" : "application/json"
          },
          body : ""
     }). then ( response =>{
          return response.text();
     }) .then ( responseText => {
          removeCategoryResponse.textContent = responseText;
     })



}