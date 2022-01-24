import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-link text-center ">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-primary btn-floating m-1" style="background-color: #0082ca" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>
                    {/* <!-- Github --> */}
                    <a class="btn btn-primary btn-floating m-1" style="background-color: #333333" href="#!" role="button"><i class="fab fa-github"></i></a>
                    {/* <!-- Instagram --> */}
                    <a class="btn btn-primary btn-floating m-1" style="background-color: #ac2bac" href="#!" role="button"><i class="fab fa-instagram"></i></a>
                </section>
            </div>
        </footer>
    )
}

export default Footer