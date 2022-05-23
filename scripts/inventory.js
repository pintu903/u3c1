var storeddata=JSON.parse(localStorage.getItem("products"))

storeddata.map(function(elem,index){
    var div= document.createElement("div")

    var img=document.createElement("img")
    img.src=elem.image

    var price=document.createElement("p")
    price.innerText=elem.price

    var description=document.createElement("p")
    description.innerText=elem.desc

    var type=document.createElement("p")
    type.innerText=elem.type

    var remove=document.createElement("button")
    remove.innerText="Remove"
    remove.setAttribute("id","remove_product")
    remove.addEventListener("click",function(){
        removeproduct(elem,index)
        window.location.reload()
    })


    div.append(img,type,price,description,remove)

    document.querySelector("#all_products").append(div)



})


function removeproduct(elem,index){
    event.preventDefault()
    console.log(elem,index)
    storeddata.splice(index,1)
    localStorage.setItem("products",JSON.stringify(storeddata))
}
