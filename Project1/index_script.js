//Note: the base username is "user1" and password is"pass1"
//Register
window.onload = function () { featuredPosts(); load(); };

//Holds the featured post information
let todaysPost;
let eachday = 24 * (60 * 60000);
let dayInterval;
let postOfTheDay = {"postInformation":[{
    "postMade": "Whos ready for Easter.",
    "postMade": "Who do you think is going to win the game.",
    "postMade": "My favorite show is Doctor Who.",
    "postMade": "The dogshow was increadable.",
    "postMade": "JavaScript silent failures are annoying.",
    "postMade": "My favoite book is Harry Potter: Prisoner of Askaban.",
    "postMade": "Started watching critical role its great.",
    "postMade": "Magic the gathering is fun.",
    "postMade": "Dnd dragons are confusing.",
    "postMade": "vanilla or Chocolate ice cream?"
}], 
"postUsers":[{ 
    "postUsername": "AnimalLover732",
    "postUsername": "Adam_Evens",
    "postUsername": "The_Next_Companion",
    "postUsername": "Richard02",
    "postUsername": "MinecraftTitan",
    "postUsername": "Ronald_Weasly",
    "postUsername": "Matthew_E.",
    "postUsername": "Crimson284",
    "postUsername": "DayOneGenshinPlayer"
}], 
"postDatesMade":[{
    "dateOfPost": "1-28-2021",
    "dateOfPost": "1-26-2023",
    "dateOfPost": "7-13-2022",
    "dateOfPost": "5-16-2020",
    "dateOfPost": "2-8-2021",
    "dateOfPost": "9-11-2020",
    "dateOfPost": "8-2-2022",
    "dateOfPost": "7-4-2021",
    "dateOfPost": "6-13-2022",
    "dateOfPost": "3-17-2019"
}]
};



function load() {
    dayInterval = setInterval(featuredPosts, eachday); //uodates the featured post every day

}
function featuredPosts() {
    todaysPost = Math.floor(Math.random(0, 9)); //randomly chooses that days post from a list made by the blog runners
    //randomInteger(0, 9);

        //Displays the featured post information
        const thePostUser = document.createElement("div");
        thePostUser.innerHTML = `${postOfTheDay.postUsers[todaysPost].postUsername}`;
        document.getElementById("featured-post-user").appendChild(thePostUser);

        const thePostData = document.createElement("div");
        thePostData.innerHTML = `${postOfTheDay.postInformation[todaysPost].postMade}`;
        document.getElementById("featured-post-info").appendChild(thePostData);

        const PostDate = document.createElement("div");
        PostDate.innerHTML = `${postOfTheDay.postDatesMade[todaysPost].dateOfPost}`;
        document.getElementById("featured-post-date").appendChild(PostDate);
    

    console.log("posts timeline")

}