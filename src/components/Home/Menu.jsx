import React from 'react';
import './Menu.css';
import boximg from '../../assets/image.jpg';
import boximg1 from '../../assets/image2.avif'
import menuimg from '../../assets/image2.avif';
import menuimg2 from '../../assets/image3.webp';
import menuimg3 from '../../assets/image4.png';
import menuimg4 from '../../assets/image5.jpg';
import menuimg5 from '../../assets/image6.png';
import menuimg6 from '../../assets/image7.jpeg';
import menuimg7 from '../../assets/image8.jpg';
import menuimg8 from '../../assets/bg image.jpeg';
import menuimg9 from '../../assets/image1.png';
import { FaCartShopping } from "react-icons/fa6";

class Menu extends React.Component {
    render() {
        return (
            <>
                   <div className="row">
                    <div className="box">
                        <div className="boximage">
                            <img src={boximg} alt="img" />           
                        </div>
                        <div className="boxcontent">
                        <h2><i>Tasty Thursdays</i></h2>
                        <h1><i>20% Off</i></h1>
                         <button className='button'>Order Now  ==> </button>
                        </div>                       
                    </div>
                    <div className="box">
                        <div className="boximage">
                            <img src={boximg1} alt="img" />           
                        </div>
                        <div className="boxcontent">
                        <h2><i>Tasty Thursdays</i></h2>
                        <h1><i>20% Off</i></h1>
                         <button className='button'>Order Now  ==> </button>
                        </div>                       
                    </div>
                   </div>
            <div className="centermenu">
                <h1><i>Our Menu</i></h1>
            </div>
            <div className="menusitem">
                <ul>
                    <li> <a href="#"> All</a></li>
                    <li> <a href="#"> Burger</a></li>
                    <li> <a href="#"> Pizza</a></li>
                    <li> <a href="#"> Pasta</a></li>
                    <li> <a href="#"> Fries</a></li>
                </ul>
            </div>
               <div className="menusec">
                <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
                 <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg2} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div> <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg3} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
               </div>


            <div className="menusec">
                <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg4} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
                 <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg5} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div> <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg6} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
               </div>


               <div className="menusec">
                <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg7} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
                 <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg8} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div> <div className="menusection">
                <div className="menubg">
                    <div className="menuimg">
                        <img src={menuimg9} alt="img"/>
                    </div>
               
                <div className="menucont">
                    <h3>Delicious Pizza</h3>
                    <h2>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                        <br/> magnam voluptatem repellendus sed eaque</h2>
                        <div className="menusicon">
                            <h2>$20</h2>
                            <h3><FaCartShopping /></h3>
                        </div>
                 </div>
                </div>
                </div>
               </div>
               <div className='menubtton'> <button>View More ==> </button></div>

               
            </>
            
            
        );
    }

}




export default Menu;