import { Link } from 'react-router-dom';
import logo from '../../img/logo192.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-stone-800 text-stone-100 md:px-10">
      <a href='/'>
        <div className='flex gap-2 items-center'>
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className='text-2xl font-bold'>Pay</h1>
        </div>
      </a>
      <nav>
        <ul className='flex gap-8 items-center'>
          <li className="hover:opacity-75"><Link to="/about">ABOUT</Link></li>
          <li className="hover:opacity-75"><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;