import "./header.css"

const Header = () => {
    return <header className='header'>
        <img src={`${process.env.PUBLIC_URL}/img/header.png`} alt='org' className='header_logo'/>
    </header>  
};

export default Header