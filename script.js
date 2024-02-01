const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".label-state b");
const successMessage = document.querySelector(".success-msg");
const successMessageButton = successMessage.querySelector("button");
const mainContent = document.querySelector(".main-content");
const deskImage = document.querySelector(".desk-img");
const mobileImage = document.querySelector(".mobile-img");
const mainElement = document.querySelector("main");
let validEmail = false;
let submittedOnce = false;

const regexEmail = /^\w+@\w+\.[a-z]{2,3}$/;

input.addEventListener("input",function(){
    if(input.value.match(regexEmail)){
        validEmail = true;
        if(submittedOnce){
            input.classList.remove("active");
            errorMessage.classList.remove("active");
        }
    }
    else{
        validEmail = false;
        if(submittedOnce && !input.value == ""){
            input.classList.add("active");
            errorMessage.classList.add("active");
        }
        else{
            input.classList.remove("active");
            errorMessage.classList.remove("active");
        }
    }
});

button.addEventListener("click",function(event){
    submittedOnce = true;
    event.preventDefault();
    if(!validEmail){
        input.classList.add("active");
        errorMessage.classList.add("active");
    }
    else{
        mainContent.classList.add("hidden");
        mainElement.classList.add("hidden-childs");
        successMessage.querySelector("em").textContent = input.value + "."
        successMessage.classList.add("active");
        mobileImage.classList.add("hidden");
        deskImage.classList.add("hidden");
    }
});

successMessageButton.addEventListener("click", function(){
    form.reset();
    mainContent.classList.remove("hidden");
    mainElement.classList.remove("hidden-childs");
    successMessage.classList.remove("active");
    mobileImage.classList.remove("hidden");
    deskImage.classList.remove("hidden");
    submittedOnce = false;
    validEmail = false;
});

window.addEventListener("load",function(){
    form.reset();
});
