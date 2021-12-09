import './Header.css'

const Header = () => {
    return (
        <div className='header-container mb-4'>
            <h1 className="header-title"><span className='first-span'>Make A Team For</span> Upcoming New Mega Project</h1>
            <h4>We are going to form a team to successfully implement our new <span className='fw-bold'>MILLION DOLLAR</span> project.</h4>
            <h1>Total Budget: 10 Million</h1>
        </div>
    );
};

export default Header;