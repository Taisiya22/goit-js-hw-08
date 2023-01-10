
 

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea")

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput);

populateTextarea();

const formData = {
    email: '',
    message: ''
};


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

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const formDataParse = JSON.parse(savedMessage);
   
    if (formDataParse) { 
        emailInput.value = formDataParse.email ;
        messageInput.value = formDataParse.message;    
    }
  
 }


