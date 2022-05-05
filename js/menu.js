let menuBTN = document.getElementById("menuBTN");

menuBTN.addEventListener("click", () =>{
    menuBTN.classList.add("active");
    let nav = document.getElementById("nav");
    nav.classList.add("active");

    let menucloseBTN = document.getElementById("menucloseBTN");
    
    menucloseBTN.addEventListener("click", () => {
        if (menuBTN.classList.contains("active")) {
             menuBTN.classList.remove("active");
             nav.classList.remove("active");
        }
    })

    
})


