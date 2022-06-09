import React from "react";

const Footer = () => {
    return (
        <footer class="bg-link text-center ">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                    {/* <!-- Email --> */}
                    <a class="btn btn-primary btn-floating m-1" href="mailto: mistywhitenton@gmail.com" role="button"><i class="fas fa-envelope me-3"></i></a>
                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/misty-whitenton/" role="button"><i class="fab fa-linkedin-in"></i></a>
                    {/* <!-- Github --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://github.com/mistwhit" role="button"><i class="fab fa-github"></i></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer