let prevScrollPos = window.pageYOffset;

        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;

            if (prevScrollPos > currentScrollPos) {
                document.getElementById("myNavbar").classList.remove("navbar-hidden");
            } else {
                document.getElementById("myNavbar").classList.add("navbar-hidden");
            }

            prevScrollPos = currentScrollPos;
        };