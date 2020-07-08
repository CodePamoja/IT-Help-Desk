var nav_con = document.querySelector(".nav-con");
var mytab = document.querySelectorAll(".tabone");

mytab.forEach(element => {

    element.addEventListener("click", () => {

        console.log(element.className);
        var x = document.getElementsByClassName("" + element.className).parentNode;
        console.log(x);
        /*if (element.getAttribute("href") == "#getsupport") {
            // nav_con.classList.add("myfixednavheight");
            nav_con.classList.remove("navbar-fixed");
            console.log(nav_con.className);

        } else {
            nav_con.classList.add("navbar-fixed");

        }*/

    });
});