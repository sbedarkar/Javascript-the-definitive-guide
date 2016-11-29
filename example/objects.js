/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
try{
    var portfolio = {
        stockname: []
    };

 function printObject()
 {
    var count = 0;
    for( var i in portfolio)
    {
        console.log("1. "+portfolio[i]);
    }
 }
 function addstock()
 {

    var name = document.getElementsByName("stockname");
    var number = document.getElementsByName("numberOfStockes");
    (portfolio.stockname).push(name[0].value, number[0].value);
     printObject();
 }
 function getquotes(stock){
    //make ajax request from google to find current rate
     var IBM = 163.34;
     var GOOGLE = 789.94;
     var ICE = 54.23;
     var price = 0.0;

     

     switch ((stock.toString()).toUpperCase()){
        case "IBM":
            price = 163.34;
            break;
        case "google":
            price = 789.94;
            break;
        case "ICE":
            price = 54.23;
            break;
        default:
            price = 0.0;
     }       
     
     return price;
 }
 
 function getvalue(){
     var total = 0.0;
     for (var stock in portfolio){
        for (var i = 0; i < (portfolio.stockname).length; i = i+2) {
                var price = getquotes((portfolio.stockname)[i]); 
                var shares = (portfolio.stockname)[i+1];
                console.log("stock name : "+ (portfolio.stockname)[i] +"number of shares  :"+(portfolio.stockname)[i+1]+"\nprice : "+price);
                total += shares * price;
        };
     }
     document.getElementById("demo7").innerHTML = total.toString();
     
 }
 
 function inheritance()
 {
     var o = new Object();
     o.x = 1;
        var p =  Object.create(o);
     p.y = 2;
     var q = Object.create(p);
     q.z = 3;
     var s = q;
     var st = "";
     for (var i in s)
     {
         st += i+" :"+ s[i]+"<span></span>";
     }
     document.getElementById("demo1").innerHTML = st;
     document.getElementById("demo2").innerHTML = q.x + q.y;
     document.getElementById("demo3").innerHTML = s.y + s.z;
//     document.getElementById("demo4").innerHTML = s.w;
     q.y = s.w;
     document.getElementById("demo4").innerHTML = q.y;
 }



}
catch(e)
{
    console(e);
}
