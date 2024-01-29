const button = document.querySelector("button");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".label-state b");
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
    if(!validEmail){
        input.classList.add("active");
        errorMessage.classList.add("active");
        event.preventDefault();
    }
    submittedOnce = true;
});
