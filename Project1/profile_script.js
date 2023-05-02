//Note: the base username is "user1" and password is"pass1"
//Register
window.onload = function () { load(); };

//Declarations
let name;
let bio;
let age;
let gender;
let family;
let relationship;
let likes;
let work;
let education;

//Allows the user to edit the name there profile lists
function editName() {
    $("#name-modify-box").css("visibility", "visible");
    $("#name-input").val(name);

}

//Sets the new name
function setName() {
    name = $("#input-name").val();
    $("#users-name").text(name);

}

//Allows the user to edit the general information there profile lists
function editBio() {
    $("#bio-modify-box").css("visibility", "visible");
    $("#bio-input").val(bio);

}

//Sets the new general info
function setBio() {
    bio = $("#input-bio").val();
    $("#users-bio").text(bio);

}

//Allows the user to edit the age there profile lists
function editAge() {
    $("#age-modify-box").css("visibility", "visible");
    $("#age-input").val(age);

}

//Sets the new age
function setAge() {
    age = $("#input-age").val();
    $("#users-age").text(age);

}

//Allows the user to edit the gender there profile lists
function editGender() {
    $("#gender-modify-box").css("visibility", "visible");
    $("#gender-input").val(gender);

}

//Sets the new gender
function setGender() {
    gender = $("#input-gender").val();
    $("#users-gender").text(gender);

}

//Allows the user to edit the family members there profile lists
function editFamily() {
    $("#family-modify-box").css("visibility", "visible");
    $("#family-input").val(family);

}

//Sets the new family info
function setFamily() {
    family = $("#input-family").val();
    $("#users-family").text(family);
}

//Allows the user to edit the relationship status of the user there profile lists
function editRelationshipStatus() {
    $("#relationship-modify-box").css("visibility", "visible");
    $("#relationship-input").val(relationship);

}

//Sets the new relationship status
function setRelationshipStatus() {
    relationship = $("#input-relationship").val();
    $("#users-relationship").text(relationship);
}

//Allows the user to edit the likes there profile lists
function editLikes() {
    $("#likes-modify-box").css("visibility", "visible");
    $("#likes-input").val(likes);

}

//Sets the new likes 
function setLikes() {
    
    likes = $("#input-likes").val();
    $("#users-likes").text(likes); 

}

//Allows the user to edit the job there profile lists
function editWork() {
    $("#work-modify-box").css("visibility", "visible");
    $("#work-input").val(work);

}

//Sets the new job info
function setWork() {
    work = $("#input-work").val();
    $("#users-work").text(work);
}

//Allows the user to edit the education history there profile lists
function editEducation() {
    $("#education-modify-box").css("visibility", "visible");
    $("#education-input").val(education);

}

//Sets the new education history
function setEducation() {
    education = $("#input-education").val();
    $("#users-education").text(education);

}

//Saves the profile data to the cookies
function saveProfileData() {
    
    document.cookie = `name=${name}; SameSite=None; Secure;`;
    document.cookie = `bio=${bio}; SameSite=None; Secure;`;
    document.cookie = `age=${age}; SameSite=None; Secure;`;
    document.cookie = `gender=${gender}; SameSite=None; Secure;`;
    document.cookie = `family=${family}; SameSite=None; Secure;`;
    document.cookie = `relationship=${relationship}; SameSite=None; Secure;`;
    document.cookie = `likes=${likes}; SameSite=None; Secure;`;
    document.cookie = `work=${work}; SameSite=None; Secure;`;
    document.cookie = `education=${education}; SameSite=None; Secure;`;

    console.log("cookies saved");


}

//loads all nessacery information when the profile page starts and set the profile info using cookies
function load() 
{
    console.log(document.cookie); //confirms the cookies are correct 

    //Gets the cookies ready
    name = String(document.cookie.split("; ").find((x) => x.startsWith("name"))?.split("=")[1]);
    bio = String(document.cookie.split("; ").find((x) => x.startsWith("bio"))?.split("=")[1]);
    age = Number(document.cookie.split("; ").find((x) => x.startsWith("age"))?.split("=")[1]);
    gender = String(document.cookie.split("; ").find((x) => x.startsWith("gender"))?.split("=")[1]);
    family = String(document.cookie.split("; ").find((x) => x.startsWith("family"))?.split("=")[1]);
    relationship = String(document.cookie.split("; ").find((x) => x.startsWith("relationship"))?.split("=")[1]);
    likes = String(document.cookie.split("; ").find((x) => x.startsWith("likes"))?.split("=")[1]);
    work = String(document.cookie.split("; ").find((x) => x.startsWith("work"))?.split("=")[1]);
    education = String(document.cookie.split("; ").find((x) => x.startsWith("education"))?.split("=")[1]);

    //Sets the profile info
    $("#users-name").text(name);
    $("#users-bio").text(bio);
    $("#users-age").text(age);
    $("#users-gender").text(gender);
    $("#users-family").text(family);
    $("#users-relationship").text(relationship);
    $("#users-likes").text(likes);
    $("#users-work").text(work);
    $("#users-education").text(education);

}

