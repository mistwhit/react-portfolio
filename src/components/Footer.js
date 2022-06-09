import React from "react";

const Footer = () => {
    return (
        <footer class="bg-link text-center ">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!-- Section: Contact Me --> */}
                <section class="mb-4">
                    {/* <!-- Email --> */}
                    <a class="btn btn-primary btn-floating m-1" href="mailto: mistywhitenton@gmail.com" role="button"><i class="fas fa-envelope me-3"></i></a>
                    {/* <!-- GitHub --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://github.com/mistwhit" role="button"><i class="fab fa-github"></i></a>
                    {/* <!-- LinkedIn --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/misty-whitenton/" role="button"><i class="fab fa-linkedin-in"></i></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer