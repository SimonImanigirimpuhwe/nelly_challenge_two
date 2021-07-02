import React from 'react';


const Footer = () => {
    return (  
        <div className="footer">
            <div class="address">
                <h3>Address</h3>
                <div class="links">
                    <a href="mailto:softimag08@gmail.com">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/simon-imanigirimpuhwe-2aaba7146/"
                    >
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i
                    ></a>
                    <a href="https://github.com/SimonImanigirimpuhwe">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2021 Simon Imanigirimpuhwe</p>
            </div>
        </div>
    );
}
 
export default Footer;