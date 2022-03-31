"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Jessica Castro
   Date:   03/25/2022
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

// run  an anonymous function when the script loads
window.addEventListener("load", function(){
   // retrieve and store field/value pairs from the URL
   let formData = location.search.slice(1);
   // update formData replacing the "+" with a space
   formData = formData.replace(/\+/g," ");
  // Update formData again replacing any URI componenets with 
  regular characters
  formData = decodeURIComponent(formData);
  // split the formData string anywhere that there is 
  an"=" or a "&"
  let formfields = formData.split(/[&=]/g);
  console.log(formfields);
  // Write the field values from the array to the order form
  document.forms.order.elements.orderDate.value = formFields[1];
  document.forms.order.elements.modelName.value = formFields[5];
  document.forms.order.elements.qty.value = formFields[7];
  document.forms.order.elements.initialCost.value = formFields[9];
  document.forms.order.elements.protectionName.value = formFields[13];
  document.forms.order.elements.protectionCost.value = formFields[15];
  document.forms.order.elements.subtotal.value = formFields[17]
  document.forms.order.elements.salesTax.value = formFields[19];
  document.forms.order.elements.totalCost.value = formFields[21];   
});

// another anonymous function that runs when the document loads
window.addEventListener.("load",function(){
   document.getElementById("subButton").onclick = runSubmit;
   document.getElementById("cardName").oninput = validateName;
   document.getElementById("cardNumber").oninput = validateNumber;
   document.getElementById("expMonth").onchange = validateMonth;
   document.getElementById("expYear").onchange = validateYear

});

// definition of the runSubmit() function
function.runSubmit(){
   // this function runs all seperate validation based functions
   validateName();
   validateCredit();
   validateNumber();
   validateMonth();
   validateYear();
   validateCVC();
}
// definition of the validname() function
function validateName(){
   let cardName = document.getElementById("cardName");
   if(cardName.validity.valueMissing){
      cardName.setCustomValidity("Enter your name as it appears on the card");

   } else {
      cardName.setCustomValidity("");

   }
}

// definition of the validateCredit() function
function validateCredit(){
   let cardNumber = document.getElementById("cardNumber");
   cardNumber.setCustomValidity("Please enter your card number!");
   if(){

   } else if (cardNumber.validity.patternMismatch){
      cardNumber.setCustomValidity("Please enter your valid card number!");

   } else {
      cardNumber.setCustomValidity("");

   }
}


// definition of the validateMonth() function
function validate(){
   console.log("WORKING");
 let cardMonth = document.getElementById("expMonth");
 if(cardMonth.selectedIndex=== 0) {
   cardMonth.setCustomValidity("Please select the expiration month");

 } else {
   cardMonth.setCustomValidity("");

 }
}
 // definition of the validateCVC() function
 let cardCVC = document.getElementById("cvc");
 let creditCard = document.querySelect("input[name='credit']:checked");
 if (cardCVC.validity.valueMissing){
   cardCVC.setCustomValidity("Please enter your CVC number!");
 } else if ((creditCard.value === "amex") && (/^\d{4}$/.test(cardCVC.value) === 
        false )) {
        cardCVC.setCustomValidity("Please enter a 4-digit CVC number");
     } else if ((creditCard.value !== "amex") &&
     (/^\d{3}$/.test(cardCVC.value) ===
         false)) {
      cardCVC.setCustomValidity("Please enter a 3-digit CVC number");


     }

 

