import Home from '../Home/Home.jsx';
import Menu from '../Home/Menu.jsx';
import About from '../Home/About.jsx';
import Book from '../Home/Book.jsx';
import Body from '../Home/Body.jsx';
function Homepage(){
    return(
        <>
            <Home/>
            <Menu/>
            <About/>
            <Book/>
            <Body/>
        </>
    )
};

export default Homepage;