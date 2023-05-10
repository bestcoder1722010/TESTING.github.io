document.querySelector(".logo").addEventListener("click",redirect);
function redirect(){
    window.location = "home.html";
}
function login(){
    document.getElementById("heading").innerHTML = "LOG IN";
    document.getElementById("main1").style.display = "none";
    document.querySelector(".container").style.height = "500px";
    document.querySelector(".signup").style.top = "100px";
    document.getElementById("as").innerHTML = "Sign Up";
    document.getElementById("pr").innerHTML = "Did Not Have An Account?";
}