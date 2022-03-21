var signupform=document.querySelector("#createAccount");
var formData = new FormData(signupform);


function setFormMessage(formElement, type, message){
  const messageElement=formElement.querySelector(".form__message");
  messageElement.textContent=message;
  messageElement.classList.remove("form__message--success","form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message){
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent=message;
}

function clearInputError(inputElement){
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent="";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        createAccountForm.classList.remove("form__hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        createAccountForm.classList.add("form__hidden");
    });
    loginForm.addEventListener("submit",e =>{
      e.preventDefault();
      setFormMessage(loginForm,"error","Invalid username or password");
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e=>{
        if(e.target.id==="signupUsename" && e.target.value.length > 0 && e.target.value.length <5){
          setInputError(inputElement, "Username must be at least 5 characters in length")
        }
      });

      inputElement.addEventListener("input", e=>{
        clearInputError(inputElement);
      })

    });

  })




// const loginForm = document.querySelector("#login");
// const createAccountForm = document.querySelector("#createAccount");
//
// var a = document.querySelector("#linkCreateAccount");
// a.addEventListener("click", function(e) {
//    e.preventDefault();
//   loginForm.classList.add("form__hidden");
//   createAccountForm.classList.remove("form__hidden");
// })
//
// var b = document.querySelector("#linkLogin");
// b.addEventListener("click", function(e) {
//     e.preventDefault();
//   loginForm.classList.remove("form__hidden");
//   createAccountForm.classList.add("form__hidden");
// })
