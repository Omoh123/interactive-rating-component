const mainContainer = document.querySelector(".container");
 const thankYou = document.querySelector(".thank_you");
 const btn = document.getElementById("n-1");
 const rates = document.querySelectorAll(".btn");
 const rating = document.querySelector(".rating");
 
 
 btn.addEventListener("click", () =>{
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none";
 })

 rates.forEach((rate) => {
    rate.addEventListener("click", () => {
 rating.innerHTML = rate.innerHTML;
    })
 });

