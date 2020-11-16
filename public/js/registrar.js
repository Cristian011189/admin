

function registrar(){


    let email = document.getElementById('mail').value;
    let contra  = document.getElementById('pass').value;
    let contraI = document.getElementById('passs').value;

    if (contra==contraI) {
        firebase.auth().createUserWithEmailAndPassword(email, contra).catch(function(error) {
       
            var errorCode = error.code;
            var errorMessage = error.message;
            
         
                if (errorCode == true && errorMessage == true ) {
                    alert("Registro con exito");
                    window.setTimeout(function(){
                        window.location.href = "perfil.html";
                        }, 5);
                    
                   
                } else {
                    alert("Usuario ya registrado");
                    window.setTimeout(function(){
                        window.location.href = "login.html"; 
                    }, 5);
                }
            
    
                
            
          });
    }else{
        alert("Contraseñas no coinciden");
        document.getElementById("con").innerHTML = "NO COINSIDEN LAS CONTRASEÑAS";
    }
    

      
 }
 
 function inicio(){
    window.setTimeout(function(){
        window.location.href = "login.html";
        }, 1);
}

