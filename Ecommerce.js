let snavbar = document.getElementById("sidenavbar")
// snavbar.style.display="block"
function shownavbar(){
    snavbar.style.left="0"
}
function closenavbar(){
    snavbar.style.left="-40%"
}

// search box

let productcontainer = document.getElementById("productbox")
let search = document.getElementById("search")
let product = productcontainer.querySelectorAll("div")

// function check(event){
//     search = event.target.value 
//     for(var i=0 < element.length; i++){
//         if(element[i].textcontent.indexOf(search)<0)
//         {
//             element[i].style.display="none"
//         }
//         else{
//             element[i].style.display="block"
//         }
//     }
// }
search.addEventListener("keyup",function(event){
    var enteredvalue = event.target.value.toUpperCase()

    for(i=0;i<product.length;i=i+1)
    {
        var productname = product[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            product[i].style.display="none"
        }
        else{
            product[i].style.display="block"
        }
    }
})