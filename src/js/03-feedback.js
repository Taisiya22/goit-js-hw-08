import throttle from 'lodash.throttle';
 

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea")

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormdata() ;

const formData = {};


function onFormSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
     console.log(formData);
    
}

function onFormInput(e) { 
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    
}

function populateFormdata() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedMessageParse = JSON.parse(savedMessage);
    
   
    if (savedMessageParse) { 
        emailInput.value = savedMessageParse.email;
        messageInput.value = savedMessageParse.message;    
    }
}
 

// form.addEventListener('input', (e) => { 
//     // console.log(e.target.name);
//     // console.log(e.target.value)
// })

