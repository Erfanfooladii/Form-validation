let username=document.forms['frm']['username'];
let phon=document.forms['frm']['phon'];
let email=document.forms['frm']['email'];
let password=document.forms['frm']['password'];


let erfa=document.getElementById('erfa');
function formval(){
    if(username.value=="" || phon.value=="" || email.value=="" || password.value==""){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Please enter your details!';
        return false;
    }

    let gl_phon=/[^0-9]/g;
    if( gl_phon.test(phon.value)){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Please enter your Phone number!';
        return false;
    }    

    let gl_email= /[a-z0-9]+\@+[a-z]+\.+[a-z]/ ;
    if(! gl_email.test(email.value)){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Please enter your Email!';
        return false;
    }
    
    let gl_password1= /[a-z]/g;
    let gl_password2= /[A-Z]/g;
    let gl_password3= /[0-9]/g;

    if(! password.value.match(gl_password1)){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Enter in lowercase letters!';
        return false;
    }

    if(! password.value.match(gl_password2)){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Enter in capital letters!';
        return false;
    }

    if(! password.value.match(gl_password3)){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='Enter with numbers!';
        return false;
    }

    if( password.value.length <8){
        erfa.style.opacity=1;
        erfa.innerHTML='<strong>Erorr!</strong>'
        erfa.innerHTML+='your to shoort';
        return false;
    }
}