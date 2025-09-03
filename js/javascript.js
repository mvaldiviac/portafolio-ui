//var style1 = URL;

function swapStylesheet(sheet) {
    document.getElementById('swap').setAttribute('href', sheet)
}

// function initate() {
//     var style1 = document.getElementById("stylesheet1");
//     var style2 = document.getElementById("stylesheet2");

//     style1.onclick = swapStyleSheet("default.css");
//     style2.onclick = swapStyleSheet("dark.css");
// }

var clic = 1;


function divLogin(){ 
    if(clic==1){
    document.getElementById("caja").style.height = "100px";
    clic = clic + 1;
    } else{
        document.getElementById("caja").style.height = "0px";      
     clic = 1;
    }   
 }


 // pagina default.html

//  document.querySelector(".checkbtn").addEventListener("click", animateBars);

//  var line1_bar = document.querySelector(".menu-bar.bar1");
//  var line2_bar = document.querySelector(".menu-bar.bar2");
//  var line3_bar = document.querySelector(".menu-bar.bar3");

//  function animateBars(){
//     line1_bar.classList.toggle("active_bar1");
//     line2_bar.classList.toggle("active_bar2");
//     line3_bar.classList.toggle("active_bar3");
//  }

 // cambia ojo

 function hideOrShowPassword() {
    var password, check, icon;
  
    password = document.getElementById("pass");
    check = document.getElementById("ver");
    icon = document.getElementById("icon");
  
    if (check.checked === true) // Si la checkbox de mostrar contraseña está activada
    {
      password.type = "text";
    } else // Si no está activada 
    {
      password.type = "password";
    }

      if(password.type === "text"){
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      }else if( password.type === "password"){
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
  }

  document.querySelector(".fa-chevron-up").addEventListener("click", closeWindow);

  var contentUser = document.querySelector(".content-user");
  var userDetail = document.querySelector(".user-detail");
  var userButtons = document.querySelector(".user-buttons");
  var none = document.querySelector(".none");
  var arrowUp = document.querySelector(".fa-chevron-up");

  function closeWindow(){
    contentUser.classList.toggle("none");
    userDetail.classList.toggle("none");
    userButtons.classList.toggle("none");
    arrowUp.classList.toggle("fa-chevron-down");
    
  }


  function validateEmail(){
                
    // Get our input reference.
    var emailField = document.getElementById('user-email');
    
    // Define our regular expression.
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var emailError = document.getElementById("errorEmail");
  
    // Using test we can check if the text match the pattern
    if( validEmail.test(emailField.value) ){
      //alert('Email es válido, continúe con el Ingreso');
     //emailError.classList.add("errorEmail");
      return true;
    }else{
      //alert('Email no es válido, corríjalo!');
      emailError.classList.add("errorEmailVisible");
      emailError.classList.remove("errorEmail");
      console.log('Email no es válido, corríjalo!');
      return false;
    }
  } 
  

  // document.querySelector(".cat1").addEventListener("click", openList);

  

  function openList(){
    
    var openCat1 = document.querySelector(".catOcult");
    
    openCat1.classList.toggle("catDisplay");

  }