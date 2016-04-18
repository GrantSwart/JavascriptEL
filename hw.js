
//EVENT LISTENER 
var event1 = document.getElementById("button1");
event1.addEventListener('click',myfirst,false);

function myfirst(){
//alert("event listener is working!");
    
//storing the users input into a local variable called userinput1
var userinput1 = document.getElementById("input1").value
//alert(userinput1);

//writing the local variable back to the HTML DOM where element has an id of demo
document.getElementById("demo").innerHTML = userinput1;
}      
