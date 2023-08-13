/*
conditional statement*/



const username=document.myform.username
const email=document.myform.email
const password=document.myform.pass
const repass=document.myform.confirm
const userError=document.querySelector("#userError")
const emailError=document.querySelector("#emailError")
const passError=document.querySelector("#passError")
const repassError=document.querySelector("#repassError")



function checkform(){
    if(username.value=="" ||
    email.value=="" ||
    pass.value=="" ||
    repass.value==""){
        alert("please fill al the fields")
        return false;
    }

   else if(username.value.length <=5 ||
           username.value.length >=15){
          userError.innerHTML=
          "*username should contain 5 to 15  characters only"
          return false;
    }
    else if(!email.value.endswith(".com")){
        emailError.innerHTML=
        "*email should contain .com at last"
        return false;
    }
 }