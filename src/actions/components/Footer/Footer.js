import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Quick Links</h4>
                    <ul className="list-uns" >
                        <li><a href="http://www.solucore.com/en-caabout_us">About Us</a></li>
                        <li><a href="http://www.solucore.com/policy">Privacy Policy</a></li>
                        <li><a href="http://www.solucore.com/sustainability_policy">Sustainability Policy</a></li>
                        <li><a href="http://www.solucore.com/blog">Blog</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Support</h4>
                        <ul className="list-uns">
                            <li><a href="http://www.solucore.com/contact_us">Contact Us</a></li>
                            <li><a href="http://www.solucore.com/security_statement">Security Statement</a></li>
                            <li><a href="http://www.solucore.com/terms_of_use">Terms & Conditions</a></li>
                        </ul>
                </div>

                <div className="col">
                    <h4>Address</h4>
                    <ul className="list-uns">
                        <li>Purdy's Wharf Tower 1</li>
                        <li>1959 Upper Water St Suite 1301</li>
                        <li>Halifax, NS B3J 3N2</li>
                        <li>(902) 457-0026</li>
                    </ul>
                </div>

                <div className="col">
                    <h4>Socials</h4>
                    <ul className="list-uns">
                        <li><a href="https://instagram.com/solucore?igshid=MzRlODBiNWFlZA==">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/solucore-inc-/">Linkedin</a></li>
                        <li><a href="https://twitter.com/solucore">Twitter</a></li>
                        <li><a href="https://www.facebook.com/pages/Solucore-Inc/486315538142112">Facebook</a></li>
                    </ul>
                </div>

                <footer>
                    <Container fluid>
                       <div className="copyright"> © {new Date().getFullYear()} {""}
                        Solucore
                       </div>
                    </Container>
                </footer>

            </div>
        </div>
    </div>
  );
}

export default Footer;



