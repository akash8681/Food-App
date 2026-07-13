import React from 'react';
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io5";
class Footer extends React.Component {
    render() {
        return (
            <>
            <div className="allfotter">
            <div className="footer">
                <div className="container">
                    <div className="footercontact">
                        <h1><i>Contact Us</i></h1>
                        <div className="footericon">
                        <div className='locicon'> <a href="#"> <FaLocationDot/></a><span>Location</span></div>
                        <div className='callicon'> <a href="#"> <MdOutlineAddIcCall/></a><span>Call+9876543498</span></div>
                        <div className='mailicon'> <a href="#"> <IoMdMailUnread/></a><span>demo@gmail.com</span></div>
                        </div>
                    </div>
                </div>
                <div className="container1">
                    <div className="feancont">
                        <h1><i>Feane</i></h1>
                        <p><i>Necessary, making this the first true generator on the Internet. 
                            It uses a dictionary of over 200 Latin words, combined with</i></p>
                            <div className="feanicon">
                              <ul>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><CiLinkedin /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><IoLogoPinterest /></a>
                              </ul>
                            </div>
                    </div>
                </div>
                <div className="containertime">
                    <div className="footerhour">
                        <h1><i>Opening Hours</i></h1>
                        <h3><i>Every Day</i></h3>
                        <h3>10.00 AM t0 11.00 PM</h3>
                    </div>
                </div>
            </div>
             <div className="copyryt">
                    <div className="footercopy"> 2025 All Rights Reserved By Free Html Templates</div>
                    <div className="footercopy1">Distributed By ThemeWagon</div>
                </div>
            </div>
            
            </>
        );
    }
}



export default Footer;