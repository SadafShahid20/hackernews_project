
import {Link, NavLink} from 'react-router-dom'
import logoSrc from './logo.jpg'
import New from './New';
import Comments from './Comments';
import Jobs from './Jobs';
import Submit from './Submit';


function Header() {
    return (
        <div className='container'>
            <div>
            <img className='logo' src={logoSrc} alt=''/>
            </div>
            <div>
                <h1> Hacker News</h1>
            </div>
            <div>
            <ul className='mx-[10px] flex gap-[10px]'>
                <NavLink  to='/new'><li className='mx-[20px]'>New</li></NavLink>
                <NavLink  to='/comments'><li className='mx-[20px]'>Comments</li></NavLink>
                <NavLink  to='/jobs'><li className='mx-[20px]'>Jobs</li></NavLink>
                <NavLink  to='/submit'><li className='mx-[20px]'>Submit</li></NavLink>
            </ul>
        </div>
   

        </div>
    );
}

export default Header;
