/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
try{
 var portfolio = new Object();
 portfolio.mutualfund ,portfolio.shares;
 
 function addstock(portfolio, mutualfund, shares)
 {
     portfolio[mutualfund] = shares;
 }
 function getquotes(stock){
     
 }
 
 function getvalue(portfolio){
     var total = 0.0;
     for (var stock in portfolio){
         var shares = portfolio[stock];
         var price = getquotes(stock);
         total += shares * price;
     }
     return total;
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
