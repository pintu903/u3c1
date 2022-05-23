//store the products array in localstorage as "products"
function productsdetails(a, b, c, d) {
  this.type = a;
  this.desc = b;
  this.price = c;
  this.image = d;
}
var arr=JSON.parse(localStorage.getItem("products")) || []
document.querySelector("#add_product").addEventListener("click",storedata)
function storedata() {
    
  event.preventDefault();

  let form = document.querySelector("#products");

  let type = form.type.value;
  let descrption = form.desc.value;
  let price = form.price.value;
  let image = form.image.value;

  let collect = new productsdetails(type,descrption,price,image);

  arr.push(collect)
  localStorage.setItem("products",JSON.stringify(arr))
}
