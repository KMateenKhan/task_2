var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var submitError=document.getElementById('submit-error');
var userError=document.getElementById('user-error');


function validateName(){
    var name=document.getElementById('contact-name').value;

    if(name.length ==0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"> </i>';
    name.style.borderColor='#26d730';
    return true;
}

function validateUser(){
    var user=document.getElementById('contact-user').value;

    if(user.length==0){
        userError.innerHTML='User-name is required';
        return false;
    }
    userError.innerHTML='<i class="fa-solid fa-circle-check"> </i>';
    return true;
}



function validatePhone(){
    var phone=document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML='Phone is required';
        return false;
    }

    if(phone.length!==10){
        phoneError.innerHTML='Phone should be 10 digits';
        return false;

    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits please';
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateEmail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false;

    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email invalid';
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}



var pass=document.getElementById('password');
var msg=document.getElementById('message');
var str=document.getElementById('strenght');

pass.addEventListener('input',()=>{
    if(pass.value.length>0){
        msg.style.display="block";
    }
    else{
        msg.style.display="none";
    }

    if(pass.value.length<4){
        str.style.color="#ff5925";
        str.innerHTML='Weak';
        pass.style.borderColor="#ff5925";
        msg.style.color="#ff5925";
    }
    else if(pass.value.length>=4 &&pass.value.length<8 ){
        str.style.color="rgb(201, 156, 9)";
        str.innerHTML='Moderate';
        pass.style.borderColor="rgb(201, 156, 9)";
        msg.style.color="rgb(201, 156, 9)";
    }
    else if(pass.value.length>=8 ){
        str.style.color="#26d730";
        str.innerHTML='Strong';
        pass.style.borderColor="#26d730";
        msg.style.color="#26d730";
    }
})

var cnfmsg=document.getElementById("confirm-password");
var finalresult=document.getElementById("result");
var confirm_message=document.getElementById("cnfmessage");
var flag=0;
cnfmsg.addEventListener("input",()=>{
    len=pass.value.length;
    if(cnfmsg.value.length>0){
        cnfmessage.style.display="block";
    }
    else{
        cnfmessage.style.display="none";
    }
    for(let i=0;i<len;i++){
        if(pass.value[i]==cnfmsg.value[i]){
            finalresult.style.color='#26d730';
            confirm_message.style.color="#26d730";
            finalresult.innerHTML='match';
            flag=1;
        }
        else{
            finalresult.style.color="red";
            confirm_message.style.color="red";
            finalresult.innerHTML='do not match';
            flag=0;
        }
    }
})



function validateForm(){
    if(!validateName() || !validateUser() || !validatePhone() || !validateEmail() || !flag){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},4000);
        return false;
    }
    if(validateName() && validateUser() && validatePhone() && validateEmail() && flag){
        submitError.style.display='block';
        submitError.style.color='green';
        submitError.style.fontSize='30px';
        submitError.innerHTML='Succesfully Submitted';
        
        return true;
    }
}

var pop=document.getElementById("popup");
function res(){
    if(flag==1){
        pop.classList.add("open-popup");
    }
}