import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-link text-center ">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/misty-whitenton/" role="button"><i class="fab fa-linkedin-in"></i></a>
                    {/* <!-- Github --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://github.com/mistwhit" role="button"><i class="fab fa-github"></i></a>
                    {/* <!-- Instagram --> */}
                    <a class="btn btn-primary btn-floating m-1" href="https://www.instagram.com/mistwhit/" role="button"><i class="fab fa-instagram"></i></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer