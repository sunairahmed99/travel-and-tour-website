let search = document.querySelector("#search");
let searchbox = document.querySelector(".search-box");

let login = document.querySelector("#user");
let loginbox = document.querySelector(".login-box");

let cancel = document.querySelector("#cancel");


let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
const videoBtn = document.querySelectorAll('.vid-btn');

window.addEventListener("scroll", ()=>{
    navbar.classList.remove("active")
    menu.classList.remove("fa-times")
    search.classList.remove("fa-times")
    searchbox.classList.remove("active")
    loginbox.classList.remove("active")

})


videoBtn.forEach(btnn =>{
    btnn.addEventListener('click', ()=>{
        console.log("clicked")
       document.querySelector('.controlss .active1').classList.remove('active1');
        btnn.classList.add('active1');
    });

});



search.addEventListener("click", ()=>{
    search.classList.toggle("fa-times")
    searchbox.classList.toggle("active")
})

login.addEventListener("click", ()=>{
    loginbox.classList.add("active")
    console.log("clicked")
})

cancel.addEventListener("click", ()=>{
    loginbox.classList.remove("active")
})
menu.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    menu.classList.toggle("fa-times")
})





    
    
    
