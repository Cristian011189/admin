
    function active(){

    
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
        } else {
            
            alert('INICIAR SESION');
            window.setTimeout(function(){
                window.location.href = "register.html";
                }, 1);
                

        }
        });
    }