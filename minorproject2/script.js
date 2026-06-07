
const button = document.getElementById("btn");

button.addEventListener('click',function() {
    document.getElementById("products").scrollIntoView({
        behavior : "smooth"
    });
});

const buybtn = document.querySelectorAll(".buy-btn");

buybtn.forEach(function(e){
    e.addEventListener("click",function(){
        alert("product added successfully!");
    });
});

