let submit = document.getElementById('submit');
let firstNameError = document.getElementById('errorText1');
let lastNameError = document.getElementById('errorText2');
let emailError = document.getElementById('errorText3');
let queryError = document.getElementById('errorText4');
let messageError = document.getElementById('errorText5');
let checkError = document.getElementById('errorText6');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let message = document.getElementById('message-input');
let select1 = document.getElementById('general-enquiry-button');
let select2 = document.getElementById('support-request-button');
let Enquiry = document.getElementById('general-enquiry');
let Support = document.getElementById('support-request');
let checkBox = document.getElementById('checkbox');
let success = document.getElementById('success');
let formCont = document.getElementById('form-cont');


let complete1 = false; 
let complete2 = false; 
let complete3 = false; 
let complete4 = false; 
let complete5 = false; 
let complete6 = false;

function a(){
    if(firstName.value.length == 0){
        firstName.classList.add('errorElement');
        firstNameError.style.display = 'block';
        complete1 = false;
    }
    else{
        firstName.classList.remove('errorElement');
        firstNameError.style.display = 'none';
        complete1 = true;
    }
}
function b(){
    if(lastName.value.length == 0){
        lastName.classList.add('errorElement');
        lastNameError.style.display = 'block';
        complete2 = false;
    }
    else{
        lastName.classList.remove('errorElement');
        lastNameError.style.display = 'none';
        complete2 = true;
    }
}
function c(){
    let at = '@';
    let dot = '.';
    let mail = 'mail';
    let com = 'com';
    let we = email.value;
    if(email.value.length == 0){
        email.classList.add('errorElement');
        emailError.style.display = 'block';
        complete3 = false;
    }
    else if((we.includes(at && com) && we.includes(dot && mail))  == false){
        email.classList.add('errorElement');
        emailError.style.display = 'block';
        complete3 = false;
    }
    else{
        email.classList.remove('errorElement');
        emailError.style.display = 'none';
        complete3 = true;
    }
}
function d(){
    if(message.value.length == 0){
        message.classList.add('errorElement');
        messageError.style.display = 'block';
        complete4 = false;
    }
    else{
        message.classList.remove('errorElement');
        messageError.style.display = 'none';
        complete4 = true;
    }
}
function e(){
    if(! (select1.checked || select2.checked )){
       queryError.style.display = 'block';
       complete5 = false;
    }
    else{
        queryError.style.display = 'none';
        complete5 = true;
    }
}
function f(){
    if(! checkBox.checked){
        checkError.style.display = 'block';
        complete6 = false;
     }
     else{
         checkError.style.display = 'none';
         complete6 = true;
     }
}

firstName.oninput = function(){
    a();
}
lastName.oninput = function(){
    b();
}
email.oninput = function(){
    c();
}
message.oninput = function(){
    d();
}
checkBox.onclick = function(){
    f();
}

function enquirySelect(){
    if(select1.checked){
        Enquiry.style.backgroundColor = 'hsl(148, 38%, 91%)';
        Enquiry.style.borderColor = '1px solid hsl(169, 82%, 27%)';
        Support.style.backgroundColor = 'white';
        Support.style.borderColor = 'none';
        e();
      }
      
}
function supportSelect() {
    if(select2.checked){
        Support.style.backgroundColor = 'hsl(148, 38%, 91%)';
        Support.style.borderColor = '1px solid hsl(169, 82%, 27%)';
        Enquiry.style.backgroundColor = 'white';
        Enquiry.style.borderColor = 'none';
        e();
      }
}
select1.addEventListener('click', ()=>{
    enquirySelect();
});
select2.addEventListener('click', ()=>{
    supportSelect();
});
function sendMessage (){
    if((complete1 && complete2 && complete3 && complete4 && complete5 && complete6) == true){
      success.style.display = 'block';
      formCont.style.marginTop = '0';
    }
}
submit.addEventListener('click', (x)=> {   
   if(! (complete1 && complete2 && complete3 && complete4 && complete5 && complete6) == true){
      x.preventDefault();
      a();
      b();
      c();
      d();
      e();
      f();
    }
    x.preventDefault();
    sendMessage();
});










