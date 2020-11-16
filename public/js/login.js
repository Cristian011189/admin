

        function ingreso(){
            let email1 = document.getElementById('mail1').value;
            let contra1  = document.getElementById('pass1').value;
            let control = false;
          

            firebase.auth().signInWithEmailAndPassword(email1, contra1)
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById("can").innerHTML = errorMessage;

              
                 
              }); //erro
              
              firebase.auth().signInWithCustomToken(token).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
           
            
        }

        /*
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
           
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
          
            console.log("usuario ACTIVO");
            document.getElementById("can").innerHTML = "Usuario activo " + email;

          } else {
            
            console.log("usuario no activo");
          }
        });//estadao usuario

        function pestaña(){
            window.setTimeout(function(){
                window.location.href = "register.html";
                }, 1);
        }*/

     