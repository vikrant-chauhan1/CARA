const barr = document.getElementById("bar");
const navbarr = document.getElementById("navbar");
const cross = document.getElementById("close");


barr.addEventListener("click", () => {
    navbarr.classList.add("open");   // Always add 'open' to open the sidebar
    navbarr.classList.remove("closee");  // Remove 'closee' if it exists
});
  
  cross.addEventListener("click", () => {
    navbarr.classList.remove("open");   // Remove 'open' to close the sidebar
    navbarr.classList.add("closee");    // Add 'closee' to slide the sidebar out
});

// LOGIC FOR CHANGING IMAGE IN THE SINGLE PRODUCT SECTION

const SmallImages1= document.getElementById("small-images1");
const SmallImages2= document.getElementById("small-images2");
const SmallImages3= document.getElementById("small-images3");
const SmallImages4= document.getElementById("small-images4");
const MainImage = document.getElementById("MainImg");

SmallImages1.addEventListener("click",() =>{
  MainImage.src = "f1.jpg"

})

SmallImages2.addEventListener("click",() =>{
  MainImage.src = "f2.jpg"

})

SmallImages3.addEventListener("click",() =>{
  MainImage.src = "f3.jpg"

})

SmallImages4.addEventListener("click",() =>{
  MainImage.src = "f4.jpg"

})


