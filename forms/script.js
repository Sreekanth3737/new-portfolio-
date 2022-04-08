const form = document.getElementById('form');
const  username =document.getElementById('name');
const email = document.getElementById('email');
const subject =document.getElementById('subject');
const message=document.getElementById('message');

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element,message)=>{
    console.log("error");
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    console.log("error",errorDisplay);
    errorDisplay.innerText= message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess =element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isvalidateEmail =email=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs=()=>{
    const usernameValue = username.value.trim();//white space removal
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue =message.value.trim();
   
    let nameVerified=false,emailVerified=false,subjectVerified=false,messageVerified=false;
    if(!isNaN(usernameValue)){
        setError(username,'username is required and must be character');

    }else{
        setSuccess(username);
        nameVerified=true;
    }
    if(emailValue===''){
        setError(email,'email is required');

    }else if 
        (!isvalidateEmail(emailValue)){

            setError(email,'provide a valid email address');

        }else{
            setSuccess(email);
            emailVerified=true;
        }

        if(subjectValue ===''){
            setError(subject,'subject is required');

        }else if(subjectValue.length < 4){
            setError(subject,'subject must be at least 4 character.')

        }else{
            setSuccess(subject);
            subjectVerified=true;
        }

        if(messageValue===''){
            setError(message,'message is required');

        }else if (messageValue.length<8){
            setError(subject,'message must be at least 8 character.')
        }else{
            setSuccess(message);
            messageVerified=true;  
        } 
    

        if(nameVerified && emailVerified && messageVerified && subjectVerified ){
            sendMail();
        }

}

    function sendMail(){
    
        let msg={
                    from_name:document.getElementById("name").value,
                    
            from_email:document.getElementById('email').value,
            subject:document.getElementById('subject').value,
            message:document.getElementById('message').value
        };
    
    
    
    
    
    
    
        emailjs.send("service_sffrs1r","template_zcf2t6n",msg).then((res)=>{
            console.log(alert("message send success."));
            document.getElementById('name')="",
            document.getElementById('email')="",
            document.getElementById('subject')="",
            document.getElementById('message')=""
        
        });
    }