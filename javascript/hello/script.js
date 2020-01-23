// var name =prompt("T'es qui toi ","Toto")

// alert("Hello "+ name);

var inputText=document.getElementById('name');
var text=document.getElementsByClassName('text');
var body=document.querySelector('body');



body.addEventListener('mousemove',function(event){
    console.log(event);
});



// body.onmousemove = function (event){
//     console.log(event);
// }

inputText.onkeyup = writeText;
text[0].onclick=function (event) {
    console.log(event);
};



function writeText(){
    text[0].textContent = inputText.value;
}