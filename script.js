
                        // Get all the navigation links
                        const navLinks = document.querySelectorAll('.navbar a');
                    
                        // Function to handle scroll event
                        function handleScroll() {
                            // Loop through each link
                            navLinks.forEach(link => {
                                // Get the section corresponding to the link
                                const sectionId = link.getAttribute('href').slice(1);
                                const section = document.getElementById(sectionId);
                    
                                // Check if the section is in the viewport
                                if (isInViewport(section)) {
                                    // Remove 'active' class from all links
                                    navLinks.forEach(link => link.classList.remove('active'));
                                    // Add 'active' class to the current link
                                    link.classList.add('active');
                                }
                            });
                        }
                    
                        // Function to check if at least a portion of an element is in the viewport
                        function isInViewport(element) {
                            const rect = element.getBoundingClientRect();
                            return (
                                rect.top <= window.innerHeight / 2 &&
                                rect.bottom >= window.innerHeight / 2
                            );
                        }
                
                        /* Scroll button */
                
                        const scrollBtn = document.querySelector(".scrool-btn");

                        // Hide the scroll button by default
                                scrollBtn.style.display = "none";
                
                        window.addEventListener("scroll", function() {
                                // Check if the user has scrolled past 400px
                                if (window.scrollY > 400) {
                                scrollBtn.style.display = "block"; // Show the scroll button
                                    } else {
                                scrollBtn.style.display = "none"; // Hide the scroll button
                                    }
                        });window.addEventListener("scroll", function() {
                            // Check if the user has scrolled past the hero section
                            const heroSection = document.getElementById("home");
                            if (window.scrollY > heroSection.offsetHeight) {
                                scrollBtn.style.display = "block"; // Show the scroll button
                            } else {
                                scrollBtn.style.display = "none"; // Hide the scroll button
                            }
                        });
                
                        scrollBtn.addEventListener("click", function() {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        });
                
                        // Add scroll event listener
                        window.addEventListener('scroll', handleScroll);

                            /*navbar-menu*/
                        function showSiderbar(){
                            const sidebar =document.querySelector('.sidebar')
                            sidebar.style.display = 'flex'
                        }
                            function hideSidebar(){
                            const sidebar =document.querySelector('.sidebar')
                            sidebar.style.display = 'none'
                        }

                        window.addEventListener('load', hideSidebar);