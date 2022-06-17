const form = document.forms[0];
const formName = document.getElementById("name");
const email = document.getElementById("e-mail");
const formMsg = document.getElementById("message");
const errorBox = document.querySelector("#error");

//let errorMsg = [];

// const validateNameMSG = ()=> {
//     if (formName.value === "" && formMsg.value === "") {
//         errorMsg.push("Please fill out highlighted fields.")
//         errorBox.textContent = errorMsg;
//         formName.classList.add('invalid');
//         formMsg.classList.add('invalid');
//       }
//       else if(formName.value === ''){
//         errorMsg.push("Please enter your name.")
//         errorBox.textContent = errorMsg;
//         formName.classList.add('invalid');
//       }
//       else if(formMsg.value === ''){
//         errorMsg.push("Please enter your message.")
//         errorBox.textContent = errorMsg;
//         formMsg.classList.add('invalid');
//       }
//       else if(email.value === ''){
//         errorMsg.push("Please enter your email.")
//         errorBox.textContent = errorMsg;
//         email.classList.add('invalid');
//       }
// };

// const validateEmail = ()=>{
//     if (email.value === ''){
//         errorMsg.push("Please enter your email.")
//         errorBox.textContent = errorMsg;
//         email.classList.add('invalid');
//     }
// }

let validName = false;
let validEmail = false;
let validMsg = false;

const validateName = () => {
  if (formName.value === "") {
    formName.placeholder = "Please enter your name.";
    formName.classList.add("invalid");
  } else{
      validName = true;
  }
};
const validateMsg = () => {
  if (formMsg.value === "") {
    formMsg.placeholder = "Please enter your message.";
    formMsg.classList.add("invalid");
  } else{
      validMsg = true;
  }
};
// const validateEmail = () => {
//   if (email.value === "") {
//     email.placeholder = "Please enter your e-mail.";
//     email.classList.add("invalid");
//   }
// };
function isCorrectEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailformat)) {
    email.classList.remove('invalid');
    errorBox.textContent = '';
    validEmail = true;
    //return true;
  } else {
    //validEmail = true;
    email.classList.add('invalid')
    errorBox.textContent = 'Invalid e-mail entered.';
    //document.form1.text1.focus();
    //return false;
  }
}

form.addEventListener("submit", (e) => {

    validateName();
    validateMsg();
    isCorrectEmail(email.value);


    if(validName === false){
        e.preventDefault();
    } else {
        formName.classList.remove('invalid');
    }
    if(validEmail === false){
        e.preventDefault();
    } else if(validEmail === true) {
        email.classList.remove('invalid');
    }
    if(validMsg === false) {
        e.preventDefault();
    } else if(validMsg === true) {
        formMsg.classList.remove('invalid');
    }
  

    
    if(validName === true &&
        validEmail === true &&
         validMsg === true) {

            formName.value = '';
            email.value = '';
            formMsg.value = '';
            alert('Form Submitted');
         }
  
  
  
  // validateNameMSG();
  // validateEmail();


  console.log("form submitted");
});

console.log(validEmail);