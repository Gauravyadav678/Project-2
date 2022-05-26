function signUp(){
		
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("You Have Sign UP SuccessFully");
}



function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("You Have SignIn SuccessFully");    
    
    
}


function signOut(){
    
    auth.signOut();
    alert("You Have Loged Out Successfully!");
    
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var email = user.email;
        if (window.location.href.indexOf("home.html") == -1) {
            window.location.href = "home.html";
        }
    } else {
        
        if (window.location.href.indexOf("index.html") == -1) {
            window.location.href = "index.html";
        }
    }
})





 