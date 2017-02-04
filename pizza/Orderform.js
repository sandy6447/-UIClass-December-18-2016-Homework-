//defining the size prices in to an array.
var size_prices = new Array();
size_prices["small"]=5;
size_prices["medium"]=7;
size_prices["Large"]=9;
size_prices["X-Large"]=12;
//defining the crust prices in to an array.
var crust_prices = new Array();
crust_prices["thin"]=2;
crust_prices["Original"]=4;
crust_prices["Pan"]=5;

// defining the sides prices in to an array.
var sides_prices= new Array();
sides_prices["None"]=0;
 sides_prices["fries"]=3;
 sides_prices["Bread sticks"]=4;
 sides_prices["cheese sticks"]=4;
 
 //calling the function getsizePrice.
function getsizePrice()
{
	//initialising the variable sizePrice=0;
    var sizePrice=0;
    //getting the element value in the form using the getElementById method.
    var selectedsize = document.getElementById("pizzaform").elements.namedItem("size");
    //Here since there are 4 radio buttons selectedsize.length = 4 
    //We loop through each radio buttons
    for(var i = 0; i < selectedsize.length; i++)
    {
        //if the radio button is checked
        if(selectedsize[i].checked)
        {
            //we set sizePrice to the value of the selected radio button
                sizePrice = size_prices[selectedsize[i].value];
            //If we get a match then we break out of this loop
              break;
        }
    }
    //We return the sizePrice
    return sizePrice;
}
//definig the function getcrustPrice.
function getcrustPrice()
{
    var crustPrice=0;
    //using the method getElementById to access the form elements.
    var selectedcrust = document.getElementById("pizzaform").elements.namedItem("crust");
    //Here since there are 3 radio buttons selectedcrust.length = 3
    //We loop through each radio buttons
    for(var i = 0; i < selectedcrust.length; i++)
    {
        //if the radio button is checked
        if(selectedcrust[i].checked)
        {
            //set the price to the value of selected radio button.
           crustPrice = crust_prices[selectedcrust[i].value];
            
            break;
        }
    }
    //We return the crustPrice
    return crustPrice;
}
 //defining the function gettoppingsPrice.
 function gettoppingsPrice()
 {
	 //initialising the variables toppingsPrice,numOftoppings.
    var toppingsPrice=0;
	//Acessing the elements in the pizzaform by  getElementById  method.
	var selectedtoppings = document.getElementById("pizzaform").elements.namedItem("toppings");
	var numOftoppings = 0;
	for(var i=0;selectedtoppings[i]; ++i)
	{      //if check box button is checked.
		if(selectedtoppings[i].checked)
		{
			numOftoppings++;
		}
	}
	//calculating the toppingsPrice.
	var toppingsPrice = numOftoppings*1.5;
	// we return the toppingsPrice.
	return toppingsPrice;
	
 }
 //defining the sides price.
 function sidesPrice()
 {
	 //intialising the variables
    var sidesPrice=0;
	// accessing the form elements using the getElementById method.
	var selectedsides = document.getElementById("pizzaform").elements.namedItem("sides");
	sidesPrice = sides_prices[selectedsides.value];

    // we return sidesPrice
    return sidesPrice;
 }
function calculateTotal()
{
   //calculating the total price sum of all the prices.
    var totalPrice = getsizePrice()+getcrustPrice()+gettoppingsPrice()+sidesPrice();
                   
 
    //display the result
    document.getElementById('totalPrice').innerHTML = "$"+totalPrice;
 
}

function dosubmit()
{  ///validating the text fields.
	if(validateText() == false )
	{
		alert ( " Missing the Data Enter the data in  textfields.");
		return;
	}
	else 
	{
	window.alert("Your order has been palced Sucessfully."); //displaying the pop-up window.
	return;
	}
}

// calling the function validateText.
function validateText()
{    
     //validating the fields.
     var theForm = document.forms["pizzaform"]
	var customer = theForm.customer.value;
	if(customer.length == 0)
		return false;
	var Address = theForm.Address.value;
	if(Address.length == 0)
		return false;
	var City = theForm.City.value;
	if(City.length == 0)
		return false;
	var State = theForm.State.value;
	if(State.length == 0)
		return false;
	var Zip = theForm.Zip.value;
	if(Zip.length == 0)
		return false;
	var Phone = theForm.Phone.value;
	if(Phone.length == 0)
		return false;
	var Email = theForm.Email.value;
	if(Email.length == 0)
		return false;
}

function doclear()
{
	
	  //clearing the content in the form.
	var theForm = document.forms["pizzaform"];
	theForm.customer.value ="";
    theForm.Address.value = "";
    theForm.City.value = "";
	theForm.State.value = "";
	theForm.Zip.value = "";
	theForm.Phone.value = "";
	theForm.Email.value = "";
	
	
	
}

