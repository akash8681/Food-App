import React from 'react';
import './Book.css';
class Book extends React.Component {
   
    render() {
        return (
        <section className='BTsec'>
            <div className='BTform'>
               <form >
                <div className='BThead'>
                    <h1><i>Book A Table</i></h1>
                </div>
                <input type="text" placeholder='Your Name' required/>
                <input type="tel" placeholder='Phone Number' required/>
                <input type="email" placeholder='Your Email' required/>

                <select className='personlist' name="How many person" id=""> 
                    <option value="">How Many Person</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <input type="date" required />
            </form>
            </div>

            <div className='BTmap'>
                <iframe  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=navalur%2Cchennai&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
            </div>
            </section>
        );
    }
}
export default Book;