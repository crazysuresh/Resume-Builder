function addNewWE(){
  // console.log("Adding new field 1");


let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('weField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("cols", 30);
newNode.setAttribute('placeholder', 'Enter here');

let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}


function addNewAQ(){
  // console.log("Adding new field 2");


let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('aqField');
newNode.classList.add('mt-2');
newNode.setAttribute("rows", 3);
newNode.setAttribute("cols", 30);
newNode.setAttribute('placeholder', 'Enter here');

let aqOb=document.getElementById("aq");
let aqAddButtonOb=document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
}



// generating CV
function generateCV(){
  // console.log("generating CV");

let name=document.getElementById("name").value;
let nameT1=document.getElementById("nameT1")

nameT1.innerHTML=name;

// direct
document.getElementById("nameT2").innerHTML=name;


//contact
document.getElementById("contactT").innerHTML=document.getElementById("contact").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("address").value;

document.getElementById("fbT").innerHTML=document.getElementById("fb").value;

document.getElementById("instaT").innerHTML=document.getElementById("insta").value;

document.getElementById("LinkedT").innerHTML=document.getElementById("LI").value;



//objective
document.getElementById("objectiveT").innerHTML=document.getElementById("obField").value;

//we
let wes=document.getElementsByClassName("weField");
let str="";

for(let e of wes){
  str=str + `<li> ${e.value} </li>`;
}

document.getElementById("weT").innerHTML= str;

//aq
let aqs=document.getElementsByClassName("aqField");
let str1="";

for(let e of aqs){
  str1+=`<li> ${e.value} </li>`;
}

document.getElementById("aqT").innerHTML= str1;

//code for setting image
let file=document.getElementById("imgField").files[0];
console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);
console.log(reader.result);

//set the image to template
reader.onloadend = function(){
document.getElementById("imgTemplate").src = reader.result;
};

document.getElementById("cv-form").style.display = "none";
document.getElementById("cv-template").style.display = "block";
}


//print CV
function printCV(){
  window.print();
}
