function back(){
    window.location ="activity_1.html";
}

function send() {
    localStorage.setItem("score", score);
    document.getElementById("update"),innerHTML= "<h1>Score: " + score +"</h1>"; 
}