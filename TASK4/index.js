const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
  });
  
  let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solid red";
  
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
  
  
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  };
  




registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// document.getElementById("signin").addEventListener('click' ,function(){
//         document.getElementById("container").style.display="none";
//         document.getElementById("result-box").style.display="inline";        
//         document.getElementById("result").innerHTML="Hello";

// });