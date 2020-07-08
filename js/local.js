var nav_con = document.querySelector(".nav-con");
var mytab = document.querySelectorAll(".tabone");

mytab.forEach(element => {

    element.addEventListener("click", () => {

        console.log()
        if (element.getAttribute("href") == "#getsupport") {
            // nav_con.classList.add("myfixednavheight");
            nav_con.classList.remove("navbar-fixed");

        } else {
            nav_con.classList.add("navbar-fixed");

        }

    });
});