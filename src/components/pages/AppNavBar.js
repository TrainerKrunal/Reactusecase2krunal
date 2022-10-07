import {Link} from 'react-router-dom'

function AppNavBar(){
    return(
        <nav className='navbar navbar-inverse'>
            <div className='container-fluid'>
                <Link to="/">TopGuns Bank</Link>
                <span>|</span>
                <Link to="/">Home</Link>
                <span>|</span>
                <Link to="/customers">Customers List</Link>
                <span>|</span>
                <Link to="/about">About Page</Link>
            </div>
        </nav>
    )
}

export default AppNavBar