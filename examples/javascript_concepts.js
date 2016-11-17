/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//try{
var s = "hello, world"; 

var text = "testing: 1, 2, 3";
var pattern = /\d+/g;
var wrapper = "test";

var t = wrapper.len;
var immutable = "hello, world";

var a =  [1,'#','c'];
var b = [];
var then = new Date(2010,0,1);
var cars = ["Saab", "Volvo", "BMW"];
var scope = "global";

    
function stringManipulation() {
document.getElementById("demo").innerHTML = "Hello"+"World";
document.getElementById("demo1").innerHTML = s;
document.getElementById("demo2").innerHTML = s.charAt(0);
document.getElementById("demo3").innerHTML = s.charAt(s.length-1);
document.getElementById("demo4").innerHTML = s.substring(1,4);
document.getElementById("demo5").innerHTML = s.slice(1,4);
document.getElementById("demo6").innerHTML = s.slice(-3);
document.getElementById("demo7").innerHTML = s.indexOf('l');
document.getElementById("demo8").innerHTML = s.lastIndexOf("l");
document.getElementById("demo9").innerHTML = s.split(",");
document.getElementById("demo10").innerHTML = s.indexOf("l",3);
document.getElementById("demo11").innerHTML = s.replace("h","H");
document.getElementById("demo12").innerHTML = s.toUpperCase();
}
function patternMatching() {
document.getElementById("demo13").innerHTML = text;
document.getElementById("demo13a").innerHTML = pattern;
document.getElementById("demo14").innerHTML = pattern.test(text);
document.getElementById("demo15").innerHTML = text.search(pattern);
document.getElementById("demo16").innerHTML = text.match(pattern);
document.getElementById("demo17").innerHTML = text.replace(pattern,"#");
document.getElementById("demo18").innerHTML = text.split(/\D+/);
}
function wrapperObject(){
wrapper.len = 4;
document.getElementById("demo19").innerHTML = t;
}
function immutableObjects() {
document.getElementById("demo20").innerHTML = immutable.toUpperCase();
document.getElementById("demo21").innerHTML = immutable;
immutable = immutable.toUpperCase();
document.getElementById("demo22").innerHTML = immutable;
}

function mutableObjects(){
b = a;
document.getElementById("demo23").innerHTML = b[0];
document.getElementById("demo24").innerHTML = b[1];
}
//copying elemenst of array into array b making them equal
function copy(){
for(var i = 0; i < a.length; i++)
b[i] = a[i];
}

function printArray(){
copy();
 if(a.length !== b.length)
     document.getElementById("demo25").innerHTML = false;
 else
     for(var i = 0; i < a.length; i++)
         if(a[i] !== b[i])
            document.getElementById("demo25").innerHTML = false; 
         else
            document.getElementById("demo25").innerHTML = b.toString();
}

function typeConversion(){
if (null == undefined)
    document.getElementById("demo26").innerHTML = true;
if("0" == 0)
    document.getElementById("demo27").innerHTML = true;
if(0 == false)
    document.getElementById("demo28").innerHTML = true;
if("0" == false)
    document.getElementById("demo29").innerHTML = true;
}
function explicitConversion(){
try {
    null.toString();
}
catch(err) {
    document.getElementById("demo30").innerHTML = err.toString();}
try {
    undefined.toString();
}
catch(err) {
document.getElementById("demo31").innerHTML = err.toString();}   
}

function conversion(){
    var n = 17; 
    document.getElementById("demo32").innerHTML = n.toString();
    document.getElementById("demo33").innerHTML = n.toString(2);
    document.getElementById("demo34").innerHTML = "o"+n.toString(8);
    document.getElementById("demo35").innerHTML = "ox"+n.toString(6);
}
function scientific(){
    var n = 123456.789;
    document.getElementById("demo36").innerHTML = n.toFixed(0);
    document.getElementById("demo37").innerHTML = n.toFixed(2);
    document.getElementById("demo38").innerHTML = n.toFixed(5);
    document.getElementById("demo39").innerHTML = n.toExponential(1);
    document.getElementById("demo40").innerHTML = n.toExponential(3);
    document.getElementById("demo41").innerHTML = n.toPrecision(4);
    document.getElementById("demo42").innerHTML = n.toPrecision(7);
    document.getElementById("demo43").innerHTML = n.toPrecision(10); 
}

function stringToNumber(){
    var s = "swati";
    var num = new Number(s);
    document.getElementById("demo44").innerHTML = num;
}

function parseIntAndFloat(){
    document.getElementById("demo45").innerHTML = parseInt("3 blind mice");
    document.getElementById("demo46").innerHTML = parseFloat(" 3.14 meters");
    document.getElementById("demo47").innerHTML = parseInt("-12.34");
    document.getElementById("demo48").innerHTML = parseInt("0xFF");
    document.getElementById("demo49").innerHTML = parseInt("0xFF");
    document.getElementById("demo50").innerHTML = parseInt("-0XFF");
    document.getElementById("demo51").innerHTML = parseFloat(".1");
    document.getElementById("demo52").innerHTML = parseInt("0.1");
    document.getElementById("demo53").innerHTML = parseInt(".1");
    document.getElementById("demo54").innerHTML = parseFloat("$72.47");
    document.getElementById("demo55").innerHTML = parseInt("11",2);
    document.getElementById("demo56").innerHTML = parseInt("ff",16);
    document.getElementById("demo57").innerHTML = parseInt("zz",36);
    document.getElementById("demo58").innerHTML = parseInt("077",8);
    document.getElementById("demo59").innerHTML = parseInt("077",10);
    document.getElementById("demo60").innerHTML = a.toString();
    document.getElementById("demo63").innerHTML = pattern.toString();
    document.getElementById("demo62").innerHTML = then.toString();
//    document.getElementById("demo61").innerHTML = (function(x){f(x);}).toString();
    document.getElementById("demo61").innerHTML = (stringToNumber).toString();
    document.getElementById("demo64").innerHTML = then.valueOf();
 
}
function scope(o){
    var i = 0;
    var st = "";
    if(typeof o === 'object'){
        document.getElementById("demo65").innerHTML = s;
        var j = 0;
        for(var k=0; k<10; k++ ){
            st += k +"<br>";
            document.getElementById("demo65").innerHTML = st;
        }
        document.getElementById("demo66").innerHTML = k;
    }
    
    document.getElementById("demo67").innerHTML = j;
}
function hosting(){
    document.getElementById("demo68").innerHTML = scope;
    var scope = "local";
    document.getElementById("demo69").innerHTML = scope;
}
function arrayInitializer(){
    var st ="";
    var mat = "";
    var a = [1,2,3];
    var matrix = [[1,2,3],[4,5,6],[7,8,9]];
    var sparseArray = [1,,,,5];
    for(var k=0; k<sparseArray.length; k++ ){
            st += sparseArray[k] +"&nbsp,&nbsp";
            document.getElementById("demo1").innerHTML = st;
        }       
    for(var k=0; k < matrix.length; k++ ){
            for(j = 0; j<matrix.length; j++)
            {
            mat += matrix[k][j] +"&nbsp";
            document.getElementById("demo2").innerHTML = mat;
            }
            mat +="<br>";
        }
    
}

function objectInitialzer(){
    var st1 = "", st2 = "", st3 = "",st4 = ""; 
    var p = { x: 2.3, y: -1.2};
    var q = {};
        q.x = 2.3; q.y = -1.2;
    var rectangle = {upperLeft : {x: 2, y: 4},
                    lowerRight: {x: 4, y: 5}};
     var side = 1;
    var square = {"upperLeft" : {x: p.x, y: p.y},
                  'lowerRight': {x: p.x + side, y: p.y + side}};

    document.getElementById("demo3").innerHTML = p.x;
    document.getElementById("demo4").innerHTML = p.y;
    document.getElementById("demo5").innerHTML = q.x;
    document.getElementById("demo6").innerHTML = q.y;

    document.getElementById("demo7").innerHTML = rectangle.upperLeft.x;
    document.getElementById("demo8").innerHTML = rectangle.upperLeft.y;
    document.getElementById("demo9").innerHTML = rectangle.lowerRight.x
    document.getElementById("demo10").innerHTML = rectangle.lowerRight.y;
    
    document.getElementById("demo11").innerHTML = square.upperLeft.x;
    document.getElementById("demo12").innerHTML = square.upperLeft.y;
    document.getElementById("demo13").innerHTML = square.lowerRight.x;    
    document.getElementById("demo14").innerHTML = square.lowerRight.y;
}

function arithmeticExpressions(){
    document.getElementById("demo15").innerHTML = 5/2;
    document.getElementById("demo16").innerHTML = 5/0;
    document.getElementById("demo17").innerHTML = 0/0;
    
    document.getElementById("demo18").innerHTML = 5%2;
    document.getElementById("demo19").innerHTML = -5%2;
    document.getElementById("demo20").innerHTML = 5%(-2);
    document.getElementById("demo21").innerHTML = 6.5%2.1; 
}

function addition(){
    document.getElementById("demo22").innerHTML = 1+2;
    document.getElementById("demo23").innerHTML = "1"+"2";
    document.getElementById("demo24").innerHTML = "1"+2;
    document.getElementById("demo25").innerHTML = 1+{};
    document.getElementById("demo26").innerHTML = true+true;
    document.getElementById("demo27").innerHTML = 2+null;
    document.getElementById("demo28").innerHTML = 2+undefined;
    document.getElementById("demo29").innerHTML = 1+2+"blind mice";
    document.getElementById("demo30").innerHTML = 1+(2+"blind mice");
}

function prePostIncrementOperators(){
    var i=1, j,k;
    j = ++i;
    document.getElementById("demo31").innerHTML = i;
    document.getElementById("demo32").innerHTML = j;
    i=1;
    k = i++;
    document.getElementById("demo33").innerHTML = i;
    document.getElementById("demo34").innerHTML = k;   
}

function inOperator(){
    var x ="";
    var point = { x:1 , y:1 };
    document.getElementById("demo35").innerHTML = "x" in point;
    document.getElementById("demo36").innerHTML = "z" in point;
    document.getElementById("demo37").innerHTML = x in point;
    document.getElementById("demo38").innerHTML = 1 in point;
    
    var data = [7,8,9];
    document.getElementById("demo39").innerHTML = "0" in data;
    document.getElementById("demo40").innerHTML = 1 in data;
    document.getElementById("demo41").innerHTML = 3 in data;
    document.getElementById("demo42").innerHTML = 7 in data;
    
}
function factorial(){
    var n = document.getElementsByName("number")[0].value;
    if(isNaN(n))
    {
        document.getElementById("demo").innerHTML = n; 
        document.getElementById("demo1").innerHTML = "not a number";
        console.log(n);
    }
    else{
    document.getElementById("demo").innerHTML = n; 
    for(var i=n-1; i>0; i--){
        n = n*i;
    }
 document.getElementById("demo1").innerHTML = n;  
 }
}

function forin(){
    var rectangle = {upperLeft : {x: 2, y: 4},
                    lowerRight: {x: 4, y: 5}};
                  
    var st = "", st1 ="", st2 ="";
    
    for(var p in rectangle){
        st += p+": <span></span>{"; 
        for(var q in rectangle[p] ){
            st += q+" : "+(rectangle[p])[q]+"<span></span>";
        }
        st +="}<br>";
        
    }

    document.getElementById("demo2").innerHTML = st;
    
    for(var i in a ){
        
        st1 += a[i] + "&nbsp&nbsp";
        st2 += i + "&nbsp&nbsp";
        document.getElementById("demo3").innerHTML = st1;
        document.getElementById("demo4").innerHTML = st2;
    }
}

function jumpStatements(){
    var st = "", input = document.getElementsByName("input")[0].value;
    
       jumpExample: for (var i = 0; i<=10; i++){
            if(i === parseInt(input))
            {
                st = input; 
                break jumpExample;
            }
            else
            {
                st += "flase"+ i+ "&nbsp&nbsp";
               
                
            }  
          }
          document.getElementById("demo5").innerHTML = "valid input : "+st;  
          
    
    }
    
  
try{
    function myFunctionReturn(name) {
        return "Hello "+name;
    }    

    function myFunction() {
        var para = document.createElement("P");
        var t = document.createTextNode(myFunctionReturn('swati'));
        para.appendChild(t);
        document.body.appendChild(para);
    } 
}
catch(e){
     alert(e);
} 



    