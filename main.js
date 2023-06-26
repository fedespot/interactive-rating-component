let rating = document.querySelector(".rating");
let result = document.querySelector(".result");
let ratingStateSubmit = document.querySelector(".rating-state__submit");
let buttonSelected = document.querySelector(".rating__number-containter");
let numberSelected = document.querySelector(".number-selected");


buttonSelected.addEventListener('click', function(evento){
   //Paso a la función un parámetro, y luego le paso los valores target
   //e innerText, entonces me trae el número
   console.log(evento.target.innerText);
   let number = evento.target.innerText;
   numberSelected.innerHTML = number;
   if(number >= 1 || number <=5){
      ratingStateSubmit.addEventListener('click', function()
      {
         rating.style.display = "none"; 
         result.style.display = "flex";
      });
   };
});


   


