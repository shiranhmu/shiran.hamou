var txt = "shirani";
var txt1 = txt.length;
var txt2 = txt.slice(0,5);
console.log(txt2);
var txt3 = "Come visit Microsoft";
var txt4 = txt3.replace("Microsoft", "BGU");
console.log(txt4);

/*var person={
    FirstName= "Alma";
    LastName= "Shaham";
    function = fullName(){

    }

}*/

const d = new Date();
console.log(d);
var h = d.getHours();
console.log(h);

if(h<12){
    greeting = "good morning!";
    console.log(greeting);
}else if(h<17) {
    greeting = "good afternoon!";
}else{
    greeting = "good evening!";
}
console.log(greeting);

function greet(){
    document.getElementById("P").innerHTML=greeting;
}

var cars = ["toyota", "honda", "ford"];
console.log(cars[0]);
console.log(cars[1]);

var i;
for(i=0; i<cars.length; i++){
    console.log(cars[i]);
}


var imgsarr = [
"pic/IMG-20191012-WA0036.jpg",
    "pic/IMG-20191012-WA0039.jpg"];


var i=0;
function play(){
        setTimeout(function(){
            document.getElementById("img").src= imgsarr[i] ;
            i++;
            if(i<imgsarr.length){
                play()
            }else{
                i=0;
            };
        }, 1000);
}