import React from 'react';
import './About.css';
import leftimage from '../../assets/image6.png';
class About extends React.Component {
    render() {
        return (
            <>
            <div className="aboutcontent">
                <div className="leftimage">
                <img src={leftimage} alt="img"/>
                </div>
                <div className="rightcontent">
                    <h1><i>We Are Feane</i></h1>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form, by injected humour,
                         or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                         you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                         <button className='button1'>Read More</button>
                </div>
            </div>
              
            </>
        );
    }
}


export default About;