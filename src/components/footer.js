import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
            <a href="https://github.com/kajalpatel20"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/kajalpatel9637/"><i class="fab fa-linkedin fa-3x"></i></a>
        <a href="mailto:kajalpatel20@gmail.com"><i class="fa fa-envelope fa-3x mr-3"></i></a>
        <a href="./Assets/Images/sample.pdf.resume.png"><i class="fa fa-file-pdf fa-3x"></i></a>
            </div>
            <p className='footer-info'>
                &copy; Kajal Patel  |  <a href="https://github.com/kajalpatel20/react-portfolio/raw/master/src/assets/kajal-resume.pdf" className="link">download resume</a>  |  <a href="https://coolors.co/f06543-e8e9eb-e0dfd5-313638-f09d51">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>

        </div>
    )
}

export default Footer;
