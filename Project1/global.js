//Register
window.onload = function () { checkLogin(); };

let usernameHold;
let passwordHold;
let checkUsername;
let checkPassword;
let newUser;
let newPass;
let LoggedIn = "";
let signIn;
let logInName;

let signinInfo = {"usernames":[{
    "theName": "user1"
}], 
"passwords":[{
    "thePass": "pass1",
}]
};

function logIn() {
    $("#logIn-window").css("visibility", "visible");
}

//Checks if the username and password match and account and if so logs the user in
function confirm() {
    usernameHold = $("#username-input").val();
    passwordHold = $("#password-input").val();


    console.log(usernameHold);
    console.log(passwordHold);

    for(I = 0; I <= signinInfo.usernames.length; I++) {
        if(usernameHold === signinInfo.usernames[I].theName) {
            checkUsername = 1;
            console.log(checkUsername);
        }
        else {
            checkUsername = 0;
            console.log(checkUsername);
        }

        if(passwordHold === signinInfo.passwords[I].thePass) {
            checkPassword = 1;
            console.log(checkPassword);
        }
        else {
            checkPassword = 0;
            console.log(checkPassword);
        }
        
        console.log(signinInfo.usernames[I].theName);
        console.log(signinInfo.passwords[I].thePass);

        if(checkUsername === 1 && checkPassword === 1) {
            I = signinInfo.usernames.length + 1;
        }

    }


    if(checkUsername === 1 && checkPassword === 1) {
        console.log("right");
        $("#posts-user-page").css("visibility", "visible");

        $("#profile-user-page").css("visibility", "visible");
        
        
        const displayName = document.createElement("div");
        displayName.innerHTML = `${usernameHold}`;
        document.getElementById("show-name").appendChild(displayName);
        

        $("#show-name").css("visibility", "visible");
        
        $("#posts-page-alert").css("visibility", "hidden");

        $("#profile-page-alert").css("visibility", "hidden");

        $("#logIn-window").css("visibility", "hidden");

        $("#sign-in-button").css("visibility", "hidden");

       $("#wrong-username-or-pass").css("visibility", "hidden");

       

        LoggedIn = "y";

        document.cookie = `signIn=${LoggedIn}; SameSite=None; Secure;`
        document.cookie = `logInName=${usernameHold}; SameSite=None; Secure;`

    }
    else {
        //$("#wrong-username-or-pass").css("visibility", "visible");
        alert("The username or password you entered was incorrect");
    }

}

function cancel() {
    $("#logIn-window").css("visibility", "hidden");
}


//Allows the user to create a new account
function createUser() {
    newUser = $("#input-new-username").val();
    newPass = $("#input-new-password").val();

    //Puts the new accounts username and password into the json list
    signinInfo['usernames'].push({"theName": newUser});
    signinInfo['passwords'].push({"thePass": newPass});

    $("#account-notification").css("visibility", "visible");
}

//Remeber if the user logged in and uses cookies to keep the web pages in the logged in state
function checkLogin() {
    
    signIn = String(document.cookie.split("; ").find((x) => x.startsWith("signIn"))?.split("=")[1]);
    logInName = String(document.cookie.split("; ").find((x) => x.startsWith("logInName"))?.split("=")[1]);

    if(logInName === "y") {
        $("#posts-user-page").css("visibility", "visible");

        $("#profile-user-page").css("visibility", "visible");
        
        const displayName = document.createElement("div");
        displayName.innerHTML = `${usernameHold}`;
        document.getElementById("show-name").appendChild(displayName);

        $("#show-name").css("visibility", "visible");

        $("#posts-page-alert").css("visibility", "hidden");

        $("#profile-page-alert").css("visibility", "hidden");

        $("#logIn-window").css("visibility", "hidden");

        $("#sign-in-button").css("visibility", "hidden");
    }
    
    
}
