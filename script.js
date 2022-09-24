function validateForm(id){
    var r = true;
    clearError();
    var name = document.forms['submit-form']['name'].value;
    var specialChars= /[^a-zA-Z ]/g ;

    if(name.match(specialChars)){
        setError("name","Please enter a valid name")
        r = false;
    }

    else if(name.length<3){
        setError("name","Please enter a valid name")
        r = false;
    }
    var emailChars = /[@.]/g ; 
    var email = document.forms['submit-form']['emailid'].value;
    if(email.length<5){
        setError("email","Please enter a valid email id")
        r = false;
    }
    if(!email.match(emailChars)){
        setError("email","Please enter a valid email id")
        r = false;
    }
    var message = document.forms['submit-form']['message'].value;
    if(message.length<1){
        setError("message","Please enter valid message")
        r = false;
    }


    return r;
}

function setError(id,error){

    var element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
}

function clearError(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}