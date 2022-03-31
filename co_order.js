"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Jessica Castro
   Date:   03/28/2022
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/


window.addEventListener("load", function(){
   // variable to provide a quick reference to the form object
   let.orderForm = document.forms.orderForm;
   // go from the form to the element for the orderDate and change its value
   orderForm.elements.orderDate.value = new Date().toDateString();
   document.forms.orderForm.elements.orderDate.value =
   // Adjust the focus when the page loads to the model field
   orderform.elements.model.focus();

   // Call the function to calculate the cost of the order
   calcOrder();

   // create event handlers for the web form controls when the document loads
   orderForm.elements.model.onchange = calcOrder;
   orderForm.elements.qty.onchange = calcOrder;

   // create an array of all radio buttons which have a name of "protection"
   let planOptions = document.querySelectorAll('input[name="protection"]');

   // loop through that array and add event handlers to every radio button
   for (let i = 0; i < planOptions.length; i++) {
      plasnOptions[i].onClick = calcOrder;}

  });

   // definition of the calcOrder() function
   function calcOrder() {

      // re-establishment of the orderForm variable
      let orderForm = document.forms.orderForm;

      // calculate the initial cost of the order
      let mIndex = orderform.elements.model.selectedIndex;
      let mCost = orderForm.elements.model.options[mIndex].value;
      let qIndex = orderForm.elements.qty.selectedIndex;
      let quantity = orderForm.elements.qty.options[qIndex].value;

      // initial cost - model cost x quantity
      let initialCost = mCost * quantity;
      // now write initial cost to the web form
      orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

      // Use CSS style selectors to retrieve the cost of the protection plan
      let Pcost = document.querySelector('input[name = "protection"]:checked').value * quantity;

      // now write that protection cost to the web form
      orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

      // Calculate the order subtotal
      orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

      // Calculate the sales tax
      let salesTax = 0.05 * (initalCost + pCost);
      // now write the sales tax amount to the web form
      orderForm.elements.salesTax.value = formatNumber(salesTax, 2)

     // calculate the cost of the total order
     let totalCost = initialCost + pCost + salesTax;
     // now write the total cost to the web form
     orderForm.elements.totalCost.value = formatUSCurrency(totalCost);

    // store the order details in hidden fields
    orderForm.elements.modelName.value = orderForm.
    elements.model.options[mIndex].text;

    orderForm.elements.protectionName.vale = document.
    querySelector('input[name = "protection"]:checked').
    nextSibling.nodeValue;
   
   // defintion of the formatNumber() function
   function formatNumber (val, decimals) {
      return val.toLocaleString(undefined, 
      {minimumFractionDigits: decimals, 
      maximumFractionDigits:decimals});

   }

      // definition of the formatUSCurrency() function
      function formatUSCurrency(val) {
         return val.toLocaleString("en-US",
            style: "currency", currency: "USD")

   }
