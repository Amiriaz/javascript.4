// chapter one alert
// Assignment # 1
// question:1 Write a script to greet your website visitor using JS alert
// box.
// alert("greet")


// question:2
// Write a script to display following message on your web
// page:

// alert("Error! Enter please a valid password")

// question:3
// Write a script to display following message on your web
// page: (Hint : Use line break)
// alert("Wellcome to js land \nhappy coding!")


// 4. Write a script to display following messages in sequence:
// alert("Wellcome to js land....")
// alert("Happy Coding!")

// 5 Make use of alerts in your new/existing HTML & CSS
// project.
// alert("Happy Coding! \nYes ofcourse")

// 6:Generate the following message through browser’s
// developer console:
// alert("Hello!... I can run js through my web browser console...")



// 7:Practice placement of <script></script> element in
// following sections of your project in exercise 6:
//  1:Head


// 2: Body (before your page’s HTML)
//  ALERTS | JAVASCRIPT

// Body (inside your page’s HTML)
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>javascript test</title>   
// </head>
// <body>
//     <script src="./app.js"></script>

// </body>
// </html>


// Body (after your page’s HTML)


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>javascript test</title>   
// </head>
// <script src="./app.js"></script>
// <body>
// </body>
// </html>


// CHAPTER:2 68.2 KB



// Chapter 1
// question 1 
function task1() {
    alert("Hello visitors !")

}


// question 2 
function task2() {
    alert('Error! Please enter a valid password.')
}


// question 3
function task3() {
    alert('Welcome to JS Land... \n Happy Coding !');

}

// question 4
function task4() {
    alert('Welcome to JS Land')
    alert(' Happy Coding !  \n')
}



// Chapter 2 


// Question 1 
var username;

// Question 2
var myName = "Amir Riaz";



// Question 3 
function task23() {
    var message = "Hello World";
    alert(message)
}


// Question 4 
function StdData() {
    var name = "Ali Raza";
    var age = 23;
    var course = "Web and Mobile Development ";
    var qualification = "Graduate";

    alert(name);
    alert(age);
    alert(course);
    alert(qualification);

    // alert("Name: "  +  name +   "\n"  +  "Age: " + age+  "\n"  +  "Course " + course  +  "\n"+ "Qualification: " + qualification);
}



// Question 5 

function pizza() {
    alert("PIZZA \n PIZZ \n PIZ \n PI \n P\n");
}


// Question 6

function Email() {
    emailAddress = "riazamir49@gmail.com"
    alert("My Email Address is : " + emailAddress);
}


// Question 7
function book() {
    var book = 'A smarter way to learn JavaScript'
    alert("I'm trying to learn from the book " + book);
}

// Question 8
function Content() {
    document.write("Yah! I can write HTML content through JavaScript  (Note : Please Refresh it for back again)");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 9

function PatternDesign() {

    var pattern = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
    alert(pattern);
}





// Chapter 3 

// Question 1 

function age() {

    var age = 24;
    alert(age);
}

// Question 2 

function visitors() {

    var userVisitors = 14;
    alert("You have visited this site" + " " + userVisitors + " " + "times");
}

// Question 3

function birthYear() {

    var birthYear = 24;
    document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is" + " " + typeof (birthYear));
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 4

function order() {

    var visitorName = "Sadiq Shah";
    var productTitle = "AI watch";
    var productQty = "1";
    var storeName = "Shah's";
    alert(visitorName + " " + "ordered " + productQty + " " + productTitle + " " + "on " + storeName + " Accessories store");

}




// Chapter 4 

// Question 1 

function multipleVariables() {

    var name, age, qualification;
}

// Question 2 

function varibaleDeclaration() {

    // Legal varaibles 
    var myname = "Sadiq Shah";
    var myName = "Sadiq Shah";
    var my_name = "sadiq shah";
    var _my_name = "sadiq shah";
    var $my_name = "sadiq shah";


    // Illlegal varaibles 
    // var @myname = "Sadiq Shah";
    // var 123myName = "Sadiq Shah";
    // var my name = "sadiq shah";
    // var month&year = "saadiq shah";
    // var birth-year = "1990";

}

// Question 3

function filleInTheBlanks() {

    document.write("<h2>Rules for naming JS variables</h2>");
    document.write("a) Variable names can only contain number,$,_. and letter <b> For example : $my_1stVariable.</b> <br>");
    document.write("b) Variable must begin with a letter, $ or _. <b> For example : $name,_name or name.</b> <br>");
    document.write("c) Variable names are case sensitive.<br>");
    document.write("d) Variable names should not be JS keywords.");




    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}



// Chapter 5

// Question 1 

function AddTwoNumbers() {

    var num1 = 34;
    var num2 = 45;
    var addNumbers = num1 + num2;
    document.write("Sum of " + num1 + " and " + num2 + " is " + addNumbers);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');



}


// Question 2 

function Operators() {

    var num1 = 34;
    var num2 = 45;
    var subNumbers = num1 - num2;
    var mulNumbers = num1 * num2;
    var divNumbers = num1 / num2;
    var Module = num1 % num2;



    document.write("Subtraction of " + num1 + " and " + num2 + " is " + subNumbers + "<br>");
    document.write("Multiplication of " + num1 + " and " + num2 + " is " + mulNumbers + "<br>");
    document.write("Division of " + num1 + " and " + num2 + " is " + divNumbers + "<br>");
    document.write("Reminder of " + num1 + " and " + num2 + " is " + Module + "<br>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 3 

function varibaleDeclaration() {

    var number1;
    document.write("Value after variable declaration is:" + number1 + "<br>");


    number1 = 5;
    document.write("Value after variable declaration is:" + number1 + "<br>");


    number1++
    document.write("Initial value: " + number1 + "<br>");


    number1 = number1 + 7;
    document.write("Value after addition is:" + number1 + "<br>");

    number1--;
    document.write("Value after decrement is:" + number1 + "<br>");

    number1 = number1 % 3;
    document.write("The remainder is : " + number1 + "<br>");

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 4

function ticketCalculation() {

    var ticketPrice = 600;
    var numberOfTickets = 5;
    var boughtTickets = ticketPrice * numberOfTickets;
    document.write("Total Cost of : " + numberOfTickets + " tickets to a movie  is " + boughtTickets + "PKR");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// Question 5

function table() {

    var tableNumber = 4;
    document.write("<h2>Table of 4 </h2>")
    document.write("4x1= " + 4 * 1 + "<br>" + "4x2= " + 4 * 2 + "<br>" + "4x3= " + 4 * 3 + "<br>" + "4x4= " + 4 * 4 + "<br>" + "4x5= " + 4 * 5 + "<br>" + "4x6= " + 4 * 6 + "<br>" + "4x7= " + 4 * 7 + "<br>" + "4x8= " + 4 * 8 + "<br>" + "4x9= " + 4 * 9 + "<br>" + "4x10= " + 4 * 10 + "<br>")
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// Question 6
function tempratureConversion() {
    var Celsius = 25;
    var fahrenheit = 70;

    c = (fahrenheit - 32) * 5 / 9;
    f = (Celsius * 9 / 5) + 32;


    document.write(Celsius + "<sup>o</sup>C is " + f + "<sup>o</sup>C");
    document.write("<br>");
    document.write(fahrenheit + "<sup>o</sup>F is " + c + "<sup>o</sup>C ");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}



// Question 7
function checkoutBillingInfo() {

    var item1 = 4000;
    var item2 = 2500;
    var item1Qty = 5;
    var item2Qty = 2;
    var shippingCharges = 800;


    var priceViaQtyItem1 = item1 * item1Qty;
    var priceViaQtyItem2 = item2 * item2Qty;

    var priceCal = priceViaQtyItem1 + priceViaQtyItem2;

    var totalCost = priceViaQtyItem1 + priceViaQtyItem2 + shippingCharges;

    document.write("<h2>Your Order</h2>");

    document.write("PRODUCT ----------------------------- SUBTOTAL");
    document.write("<br>");
    document.write("AI Watch (item1)  × " + item1Qty + " ----------------- " + priceViaQtyItem1 + "PKR");
    document.write("<br>");
    document.write("Mac Book (item2)  × " + item2Qty + " ----------------- " + priceViaQtyItem2 + "PKR");
    document.write("<br>");
    document.write("Subtotal " + " ---------------------------------- " + priceCal + "PKR");
    document.write("<br>");
    document.write("Total cost of your order is :  " + " --------- " + totalCost + "PKR");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')
}

// / Question 8
function marksheet() {

    var totalMarks = 980;
    var obtMarks = 804;
    var per = obtMarks / totalMarks * 100;

    document.write("Total Marks : " + totalMarks + "<br>Obtained Marks : " + obtMarks + "<br>Percentage : " + per + "%");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>')



}

// / Question 9
function currenciesConversion() {

    var oneUSD = 193.65;
    var oneRiyal = 51.63;


    var PKR2USD = oneUSD * 10;
    var PKR2Riyal = oneRiyal * 10;
    var totalCost = PKR2USD + PKR2Riyal;
    document.write("<h1>Currency In PKR</h1>");
    document.write("Total Currency in PKR : " + totalCost);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// / Question 10
function SignleExpression() {


    var SingleExpression = 5 * 10 / 2;
    document.write("Single Expression calculation is : " + SingleExpression);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// / Question 11
function yearCalculation() {
    var currentYear = 2022;
    var birthYear = 1998;

    var myAge = currentYear - birthYear;

    document.write("<h1>Age Calculator</h1>")
    document.write("Current Year : " + currentYear + "<br>Birth Year is" + birthYear + "<br>My age is  : " + myAge);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// / Question 12
function circumferenceAndArea() {

    var radius = 20;
    var pi = 3.142;
    var cf = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write('Radius of Circle is : ' + radius);
    document.write("<br>");
    document.write('The Circumference of Circle is : ' + cf);
    document.write("<br>");
    document.write('The Area of Circle is : ' + pi);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// / Question 13
function lifetimeStudy() {

    var favsnack = "TUC";
    var currentAge = 24;
    var maxAge = 65;
    var snankPerDay = 2;
    var snankPerDay = 2;
    var ageCalculate = maxAge - currentAge;
    var totalSnaks = ageCalculate * snankPerDay;
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("<br>");
    document.write("Favorite Snack:  " + favsnack);
    document.write("<br>");
    document.write("Current Age: " + currentAge);
    document.write("<br>");
    document.write("Estimated Maximum Age:  " + maxAge);
    document.write("<br>");
    document.write("Amount of Snacks per day:  " + snankPerDay);
    document.write("<br>");
    document.write("You will need " + totalSnaks + " " + favsnack + " to last you untill the ripe old age of " + maxAge);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}




// Chapter 6-9

// Question 1 

function arithemticOperator() {

    var a = 10;
    document.write("Result:");
    document.write("<br>");
    document.write("Value of a is: " + a);
    document.write("<br>");
    document.write("------------------------------------------")
    document.write("<br><br>");


    ++a;
    document.write("The value of ++a is : " + a);
    document.write("<br>");
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");


    document.write("The value of a++ is : " + a);
    document.write("<br>");
    a++;
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");




    --a;
    document.write("The value of --a is : " + a);
    document.write("<br>");
    document.write("Now the value of a : " + a);
    document.write("<br>");
    document.write("<br>");


    document.write("The value of a-- is : " + a);
    document.write("<br>");
    a--;
    document.write("Now the value of a : " + a);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}


// Question 2 

function expression() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    //   1  -  0  +  1  +  1
    //   1 + 1 + 1
    //   3

    document.write("Explaination");
    document.write("<br>");
    document.write("------------------------------------------");
    document.write("<br>");
    document.write("--a is the pre decrement of a, current value of a is 2 after decrement --a =  1  <br>");
    document.write("--b is the pre decrement of b, current value of b is 0 after decrement --b =  0  <br>");
    document.write("++b is the pre increment of b, current value of b is 1 after increment ++b =  1  <br>");
    document.write("++b is the post decrement of b, it will decrease the value after call the varibale current value of b is 1 after decrement  b-- =  1");


    document.write("<br>");
    document.write("Current value of a is : 1");
    document.write("<br>");
    document.write("Current value of b is : 1");


    document.write("<br>");
    document.write("Result : " + result);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 3

function greetUser() {

    var name = prompt("Enter your name : ");
    document.write("Welcome " + name);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 4

function tablePrints() {
    var tableNo = prompt("Enter a number : ");
    document.write(tableNo + "x1= " + tableNo * 1 + "<br>" + tableNo + "x2= " + tableNo * 2 + "<br>" + tableNo + "x3= " + tableNo * 3 + "<br>" + tableNo + "x4= " + tableNo * 4 + "<br>" + tableNo + "x5= " + 4 * 5 + "<br>" + tableNo + "x6= " + tableNo * 6 + "<br>" + tableNo + "x7= " + tableNo * 7 + "<br>" + tableNo + "x8= " + tableNo * 8 + "<br>" + tableNo + "x9= " + tableNo * 9 + "<br>" + tableNo + "x10= " + tableNo * 10 + "<br>")
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// Question 5


function result() {

    var nameSub1 = prompt("Enter a your subject name : ");
    var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

    var nameSub2 = prompt("Enter a your subject name : ");
    var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

    var nameSub3 = prompt("Enter a your subject name : ");
    var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


    var eachmarks = 100;
    var eachpercentage1 = subMarks1 / eachmarks * 100;
    var eachpercentage2 = subMarks2 / eachmarks * 100;
    var eachpercentage3 = subMarks3 / eachmarks * 100;

    var totalMarksStd = 300;
    var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
    var Percentage = obtainedMarks / totalMarksStd * 100;
    document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  
    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${eachpercentage1}%</td>
    </tr>
    <tr>
    <td>${nameSub2}</td>
    <td>${eachmarks}</td>
    <td>${subMarks2}</td>
    <td>${eachpercentage2}%</td>
</tr>
<tr>
<td>${nameSub3}</td>
<td>${eachmarks}</td>
<td>${subMarks3}</td>
<td>${eachpercentage3}%</td>
</tr>  
<tr>
<td></td>
<td>${totalMarksStd}</td>
<td>${obtainedMarks}</td>
<td>${Percentage}%</td>
</tr>  
    </table>`)

}

// chapter 9 - 11


// question 1 
function wlecomeMessage() {
    var city = prompt("Enter a city - only karachi");
    if ((city === "Karachi" || city === "karachi")) {
        alert("Welcome to city of lights")
    }
    else {
        alert("Invalid Input")
    }

}


// question 2 

function genderMessage() {
    var gender = prompt("Enter a gender Male or Female: ");
    if ((gender === "male" || gender === "Male")) {
        alert("Good Morning Sir.")
    }

    else if ((gender === "female" || gender === "Female")) {
        alert("Good Morning Ma'am.")
    }

    else {
        alert("Invalid Gender");
    }
}

function trafficLight() {
    var color = prompt("Enter a color which traffic follows - Red, Green, Yellow");
    if ((color === "red") || (color === "Red")) {

        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>Red</td>
            <td>Must Stop</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else if ((color === "yellow") || (color === "Yellow")) {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>${color}</td>
            <td>Ready to move</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else if ((color === "green") || (color === "Green")) {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
            <td>${color}</td>
            <td>Move now</td>
          </tr>      
        </tbody>
      </table>
      <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )
    }
    else {
        document.write(`
        <table class="my-table">
        <tr>
          <th>Signal color</th>
          <th>Message</th>
        </tr>
       
        <tbody>
          <tr>
          <td>${color}, Invalid Color</td>
            <td>No Message Found</td>
          </tr>      
        </tbody>
      </table>
     <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        `
        )

    }

}

// question 3

function fuelMessage() {
    var fuel = +prompt("Enter a fuel remain in your car.");

    if (fuel < 0.25) {
        alert("Please refill the fuel in your car")
    }
    else {
        alert("No need to refill the fuel in your car")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// question 4

function runScript() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}



// question 5

function MarksheetGrade() {

    document.write(
        `<style>
        @font-face {
            font-family:p-M ;
            src: url(assests/fonts/Poppins-Medium.ttf);
        }
       
        @font-face {
            font-family: p-l ;
            src: url(assests/fonts/Poppins-Light.ttf);
          }
        .marksheet_div {
            width: 60%;
            margin: 45px auto;
            text-align: left;
            /* border: 1px solid; */
            padding: 20px 35px;
            box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
        }
        .marksheet_div h1{
            font-family:p-M ;
        }
        .marksheet_div h2{
            font-family: p-l ;;
        }
        </style>`
    )


    var StdObtainedSub1 = + prompt("Enter a obtain marks  of sub 1 : ");
    var StdObtainedSub2 = + prompt("Enter a obtain marks  of sub 2 :");
    var StdObtainedSub3 = + prompt("Enter a obtain marks  of sub 3 :");
    var totalMarksSub = + prompt("Enter a total marks of 3 subject :");

    var stdTotalObtMarks = StdObtainedSub1 + StdObtainedSub2 + StdObtainedSub3;

    var percentage = (stdTotalObtMarks / totalMarksSub) * 100;

    if (percentage >= 80) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade A-one</h2>
                <h2>Remarks : Excellent </h2>
            </div>
            <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        
        `)
    }
    else if (percentage >= 70) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade A</h2>
                <h2>Remarks : Good </h2>
                <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
            </div>
        
        `)
    }

    else if (percentage >= 60) {
        document.write(`
            
            <div class="marksheet_div"> 
                <h1>Mark Sheet</h1>
               
                <h2>Total Marks : ${totalMarksSub}</h2>
                <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
                <h2>Percentage : ${percentage}%</h2>
                <h2>Grade : Grade B</h2>
                <h2>Remarks : You need to improve </h2>
            </div>
            <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
        
        `)
    }
    else {
        document.write(`
            
        <div class="marksheet_div"> 
            <h1>Mark Sheet</h1>
           
            <h2>Total Marks : ${totalMarksSub}</h2>
            <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
            <h2>Percentage : ${percentage}%</h2>
            <h2>Grade : Fail </h2>
            <h2>Remarks : Sorry </h2>
        </div>
        <h2 style="text-align:center;"><a href="index.html">Back</a></h2>
    
    `)

    }
}

// question 7

function guessGame() {
    var user = +prompt("Enter a number");
    var guessNo = 2;
    if (user === guessNo) {
        alert("Bingo! Correct answer")
    }
    else if (user === ++guessNo) {
        alert("Close enough to the correct answer")
    }
    else {
        alert("Sorry! Incorrect answer")
    }
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}


// question 8

function divisibleBy3() {

    var number = +prompt("Enter a number : ");
    if (number % 3 == 0) {
        alert('divisible by 3')
    }
    else {
        alert("not divisible by 3")

    }
}


// question 9

function evenOdd() {

    var number = +prompt("Enter a number : ");
    if (number % 2 == 0) {
        alert('Even Number')
    }
    else {
        alert("Odd Number")

    }
}


// question 10

function Temp() {

    var temp = prompt("Enter a temprature :");
    if (temp >= 40) {
        alert("It is too hot outside.")
    }
    else if ((temp >= 30)) {
        alert("The Weather today is Normal")
    }
    else if ((temp >= 20)) {
        alert("Today’s Weather is cool.")
    }
    else {
        alert("OMG! Today’s weather is so Cool.")
    }
}


// question 11

function calculator() {

    var num1 = +prompt("Enter a number 1")
    var num2 = +prompt("Enter a number 2")
    var opt = prompt("Enter an operator do you want to perfome (+,-,*,/,%");

    if (opt === "+") {

        var result = num1 + num2
        alert(`Addition of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "-") {

        var result = num1 - num2
        alert(`Subtraction of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "*") {

        var result = num1 * num2
        alert(`Multiplication of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "/") {

        var result = num1 + num2
        alert(`Division of ${num1} & ${num2} is ${result}`)
    }
    if (opt === "%") {

        var result = num1 + num2
        alert(`Reminder of ${num1} & ${num2} is ${result}`)
    }
    else {
        alert("Invalid Operator")
    }
}

// Chapter 12 - 13

// Question 1

function ASCIIcode() {
    var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
    var asciiCode = userInput.charCodeAt(0);

    // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
    // A-Z (65 to 90)
    // a-z (97-122)
    // 0-9 (48-57)

    if (asciiCode >= 65 && asciiCode <= 90) {
        alert(userInput + " is a uppercase letter")
    }
    else if (asciiCode >= 97 && asciiCode <= 122) {
        alert(userInput + " is a Lowercase letter")
    }
    else if (asciiCode >= 48 && asciiCode <= 57) {
        alert(userInput + " is a number")
    }
    else {
        alert("Invalid Input")
    }

}


// Question 2

function findLarger() {
    var UserNumber1 = +prompt("Enter a number 1 ")
    var UserNumber2 = +prompt("Enter a number 2 ")

    if (UserNumber1 > UserNumber2) {
        alert(UserNumber1 + " is greater than " + UserNumber2)
    }
    else if (UserNumber2 > UserNumber1) {
        alert(UserNumber2 + " is greater than " + UserNumber1)
    }
    else if (UserNumber2 === UserNumber1) {
        alert(UserNumber2 + " is equal to  " + UserNumber1)
    }
    else {
        alert("Invalid Numbers")
    }
}


// Question 3

function numberFinder() {

    var numberFinder = +prompt("Enter a number : ")

    if (numberFinder > 0) {
        alert("Positive number")
    }
    else if (numberFinder < 0) {
        alert("Negative number")
    }
    else if (numberFinder === 0) {
        alert("Zero")
    }
    else {
        alert("Invalid Input")
    }
}


// Question 4

function vowelsFinder() {

    var cha = prompt("Enter a character (a-z, A-z)");

    if ((cha == "a") || (cha == "A") || (cha == "e") || (cha == "E") || (cha == "i") || (cha == "I") || (cha == "O") || (cha == "o") || (cha == "u") || (cha == "U")) {
        alert(true)
    }
    else {
        alert(false)
    }

}


// Question 5

function passwordChecker() {
    var actualPass = "FUUAST1SADIQ";
    var InputPass = prompt("Enter a Password");
    if (InputPass === actualPass) {
        alert("Correct! The password you entered matches the original password")
    }
    else if (InputPass == "") {
        alert("Please enter your password")
    }
    else {
        alert("Incorrect password")
    }
}


// Question 6

function ScriptCorrection() {
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day";
        alert(greeting)
    }
    else {
        greeting = "Good evening";
        alert(greeting)
    }
}

// Question 7

function timeFind() {
    var userInput = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")
    if (userInput >= 0000 && userInput < 1200) {

        alert("Good Morning !")
    }
    else if (userInput >= 1200 && userInput < 1700) {
        alert("Good Afternoon !")
    }
    else if (userInput >= 1700 && userInput < 2100) {
        alert("Good Evening!")
    }
    else if (userInput >= 2100 && userInput < 2359) {
        alert("Good Night !")
    }
    else {
        alert("Invalid time format")
    }
}


// Chapter 14-16 ARRAY

// Question 1 

function literalArray() {

    var cities = [];
    alert("var cities = [ ] ;")
}

// Question 2

function objectArray() {

    arrayList = new Array()
    alert(" arrayList = new Array()")
}

// Question 3

function stringsArray() {

    var stringArray = ["Karachi", "Lahore", "Islambad"];
}

// Question 4


function NumberArray() {

    var numberArray = [1, 2, 4, 5, 6, 66, 67];
}


// Question 5 


function booleanArray() {

    var boolArray = [true, true, false, false];
}


// Question 6
function mixArray() {

    var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67, true, true, false, false];
}


// Question 7
function educationQualification() {

    var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

    document.write("<h1>Qualification</h1><br>")
    document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
    document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
    document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
    document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
    document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
    document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
    document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
    document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}

// Question 8

function marksheet() {
    var stdNames = ["Sadiq", "bilal", "Dany"];
    var stdScroes = [450, 340, 380];

    var perofStd1 = stdScroes[0] / 500 * 100;
    var perofStd2 = stdScroes[1] / 500 * 100;
    var perofStd3 = stdScroes[2] / 500 * 100;

    document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
    document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
    document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9 

function Initialize() {

    var colors = ["red", "green", "blue"];
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}
// Question 9a

function addcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the start.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}


// Question 9b

function endcolorStart() {
    var colorInput = prompt("Enter a color name which do you want to add at the end.");
    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.push(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9c

function addMoreColorStart() {
    var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
    var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.unshift(colorInput1, colorInput2);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9d

function deleteColorStart() {
    var colorInput = prompt("Enter a color  name which do you want to delete  at the start.");

    var colors = ["red", "green", "blue"];
    var Addedcolor = colors.shift(colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 9e 

function specificIndex() {
    var colors = ["red", "green", "blue"];
    var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
    var indexNumber = +prompt("which color do you want to add on that index? ");
    colors.splice(indexNumber, 0, colorInput);
    document.write(colors);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 9f 

function numberOfColorDelete() {
    var colors = ["red", "green", "blue"];
    var deleteIndex = +prompt("At which index do you want to delete color?")
    var colorDelete = +prompt("which color do you want to delete on that index?")
    colors.splice(deleteIndex, colorDelete);
    document.write(colors + "<br/>");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 10

function arrayAscOrder() {

    var studentScores = [67, 87, 98, 97, 67, 80, 90];
    document.write("Scores of Students :  " + studentScores);

    document.write("<br>")

    var sortedScores = studentScores.sort()
    document.write("Ordered Scores of Students :  " + studentScores);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 11 

function CopyArray() {

    var citiesArray = ["karachi", "Queeta", "Peshawar", "lahore", "Islamabad"]
    var selectedCities = citiesArray.slice(2, 5);
    document.write("Cities List  : <br> " + citiesArray + "<br>");
    document.write("Cities List  : <br> " + selectedCities);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');
}

// Question 12

function JoinArray() {

    var arr = ["This", "is", "my", "cat"];
    document.write("<h1>Array: </h1>");
    document.write(`<h1>${arr}</h1><br>`);

    var joined = arr.join(" ");

    document.write("<h1>String: </h1>");
    document.write(`<h1>${joined}</h1><br>`);
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

// Question 13 

function FIFO() {

    var acc = ["Keyboard", "mouse", "console.loger", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.shift();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 14 


function LIFO() {

    var acc = ["Keyboard", "mouse", "console.loger", "monitor"];
    document.write("<h2>Devices: </h2>");
    document.write(`<h2>${acc}</h2><br>`);

    var firstDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

    var secDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

    var thirdDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

    var fourthDevice = acc.pop();
    document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');


}
// Question 15 

function dropdown() {

    var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

    document.write(`
        <div class="dropDown">
        <select>
            <option>${mobiles[0]}</option>
            <option>${mobiles[1]}</option>
            <option>${mobiles[2]}</option>
            <option>${mobiles[3]}</option>
            <option>${mobiles[4]}</option>
            <option>${mobiles[5]}</option>
        </select>
        </div>
        
        <style>
            @font-face {
                font-family:p-M ;
                src: url(assests/fonts/Poppins-Medium.ttf);
            }
           
            @font-face {
                font-family: p-l ;
                src: url(assests/fonts/Poppins-Light.ttf);
              }
              
            .dropDown{
                width:60%;
                margin:20px auto;
                text-align:center;
            }
            select {
                border: none;
                width: 40%;
                padding: 10px;
                font-size: 18px;
                box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
                font-family: p-l ;
            }
        </style>
    `)


}


// chapter 17 - 20

// Question 1
function multidimentions() {
    var mulArray = [[], [], []]
    document.write("var mulArray = [ [ ],[ ],[ ] ]");
    document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

}

function multidimensionalArray() {

    var mulArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

    document.write(mulArray[0] + "<br>" + mulArray[1] + "<br>" + mulArray[2] + "<br>");
}

// question 3 

function counting() {

    for (i = 1; i <= 10; i++) {
        document.write(i + "<br>")

    }
}
// question 4 

function tablePrint() {

    var userNo = +prompt("Enter a Number  for table : ")
    for (i = 1; i <= 15; i++) {
        document.write(userNo + "X" + " " + i + "  " + userNo * i + "<br>")
    }
}

// Question 5

function fruitsList() {
    fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    for (var i = 0; i < fruits.length; i++) {
        document.write(fruits[i] + "<br>")
    }

    for (var i = 0; i < fruits.length; i++) {
        document.write("Element at index  " + i + " is " + fruits[i], "<br>")
    }
}

// Q6 a,b,c,d,e
function listMethoda() {
    document.write("<h1> Counting</h1>")
    for (i = 1; i <= 15; i++) {

        document.write(i + " ")
    }
}
function listMethodb() {
    document.write("<h1>Reverse Counting</h1>")

    for (i = 10; i >= 0; i--) {
        document.write(i + " ")
    }
}
function listMethodc() {
    document.write("<h1>Even Number</h1>")
    for (i = 0; i <= 20; i++) {

        if (i % 2 == 0) {
            document.write(i + " ")
        }
    }
}
function listMethodd() {
    document.write("<h1>ODD Number</h1>")
    for (i = 0; i <= 20; i++) {

        if (i % 2 == 1) {
            document.write(i + " ")
        }
    }
}
function listMethode() {
    document.write("<h1>Series</h1>")
    for (i = 2; i <= 20; i++) {

        if (i % 2 == 0) {
            document.write(i + "k" + "  ")
        }
    }
}


// Q7 
function cookies() {
    A = ["cake", "apple pie", "cookie", "chips", "patties"];
    userInput = prompt("Enter a snack :")
    flag = false;
    for (i = 0; i <= A.length; i++) {
        if (userInput == A[i]) {

            flag = true;

            userInput = A[i];
            index = i;
        }
    }
    if (flag == true) {
        document.write(userInput + " is available at index " + index + " in our bakery")
    }
    else {
        document.write(userInput + " is not available")
    }
}

// Q8
function largestNumber() {
    A = [24, 53, 78, 91, 12]
    max = 0;
    for (var i = 0; i < A.length; i++) {
        if (max < A[i]) {
            max = A[i];
        }
    }
    document.write("Array Items ")
    for (var i = 0; i < A.length; i++) {
        document.write(A[i], ",")
    }
    document.write("<br>The Largest number is " + max)
}


// Q9
function SmallestNumber() {
    A = [24, 53, 78, 91, 12]
    min = A[0];
    for (var i = 0; i < A.length; i++) {
        if (min > A[i]) {
            min = A[i];
        }
    }
    document.write("Array Items ")
    for (var i = 0; i < A.length; i++) {
        document.write(A[i], ",")
    }
    document.write("<br>The Smallest number is " + min)
}


// Q10
function rangeNumber() {

    for (var i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            document.write(i + ",")
        }
    }
}