import React from 'react';
import'./Body.css';
import custboximg from '../../assets/image7.jpeg'
import custboximgs from '../../assets/image8.jpg'
class Body extends React.Component {
    render() {
        return (
            <>
            <div className="ourcustomer">
                <div className="customerbox">
                    <div className="customercontent">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ex quas, adipisci quasi et ipsam, voluptatum repudiandae esse sit molestiae corrupti delectus facilis 
                            consequuntur earum aperiam iste eveniet. Enim, quidem velit.</h3>
                            <h2>Mike Hamel</h2>
                            <h4>Mangana Aliqua</h4>
                    </div>
                    <div className="custboximg">
                        <img src={custboximg} alt="img"  />
                    </div>
                </div>
                <div className="customerbox">
                    <div className="customercontent">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ex quas, adipisci quasi et ipsam, voluptatum repudiandae esse sit molestiae corrupti delectus facilis 
                            consequuntur earum aperiam iste eveniet. Enim, quidem velit.</h3>
                            <h2>Mike Hamel</h2>
                            <h4>Mangana Aliqua</h4>
                    </div>
                    <div className="custboximgs">
                        <img src={custboximgs} alt="img"  />
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Body;