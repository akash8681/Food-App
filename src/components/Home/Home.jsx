import React from 'react';
import './Home.css';
class Home extends React.Component{
   render(){
        return(
            <div className='content'>
                <div className="layer"></div>
                <h1> <i>Fast Food Restaurant</i></h1>
                <p>Doloremque, itaque aperiam facilis rerum, commodi, quisquam esse error unde. <br />
                 Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                 <button className='button'>Order Now  ==> </button>
            </div>
        )
    }
}
export default Home;