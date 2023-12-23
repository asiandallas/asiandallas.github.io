let prevScrollPos = window.pageYOffset;

        window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;

        let navbar = document.getElementById("myNavbar");
        if (navbar) {
            if (prevScrollPos > currentScrollPos) {
                navbar.classList.remove("navbar-hidden");
            } else {
                navbar.classList.add("navbar-hidden");
            }
        }

            prevScrollPos = currentScrollPos;
        };