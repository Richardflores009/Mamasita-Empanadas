import react from 'react';

function Footer() {
    return(
        <footer>
            <div className="left-footer">
                <h4 className="footer-title">Company</h4>
                <p>
                    <a href="https://goo.gl/maps/TYGQ49kfWZjct1fF8" target="_blank">
                        1234 N. Antarctica Ln 
                        <br></br>
                        South Pole, Antarctica 22215
                    </a>
                </p>
                <p>&copy; Company 2021</p>
            </div>
            <div className="right-footer">
                <a href="mailto:chrisrw300@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i></a>
                <a href='#'><i class="fa fa-yelp" aria-hidden="true"></i></a>
                <a href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href='#'><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            </div>
        </footer>
    )
}

export default Footer;