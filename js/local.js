var nav_con = document.querySelector(".nav-con");
var mytab = document.querySelectorAll(".tabone");
var btn_create_an_account_opener = document.querySelector("#create_an_account");
var btn_login_page_opener = document.querySelector("#login_page_opener");
var page_signIn = document.querySelector(".signin");
var page_signup = document.querySelector(".signup");


btn_create_an_account_opener.addEventListener("click", () => {
    page_signIn.classList.add("hide");
    page_signup.classList.remove("hide");

});
btn_login_page_opener.addEventListener("click", () => {
    page_signIn.classList.remove("hide");
    page_signup.classList.add("hide");

});