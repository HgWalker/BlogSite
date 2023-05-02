//Note: the base username is "user1" and password is"pass1"
let today = new Date();

let post = {"postInfoCollection":[{
    "postData": ""
}], 
"postDateCollection":[{
    "date": "",
}]
};

let postCounter = 1;

let postInfo;
let currentDate;


function addNewPost() {
    $("#make-new-post").css("visibility", "visible");

    
}

function setPost() {
    currentDate = today;
    postInfo = $("#input-post").val();


    post['postInfoCollection'].push({"postData": postInfo});
    post['postDateCollection'].push({"date": currentDate});
}


function seeTimeline() {
    for(postCounter; postCounter <= post.postInfoCollection.length; postCounter++) {
        const timelinePost = document.createElement("div");
        timelinePost.innerHTML = `${post.postInfoCollection[postCounter].postData}`;
        document.getElementById("timeline").appendChild(timelinePost);

        const timelineDate = document.createElement("div");
        timelineDate.innerHTML = `${post.postDateCollection[postCounter].date}`;
        document.getElementById("timeline").appendChild(timelineDate);

        const postSpaces = document.createElement("div");
        postSpaces.innerHTML = `-----------------------------------`;
        document.getElementById("timeline").appendChild(postSpaces);
    }
    
    

    console.log("posts timeline")

}