import logo from '../../img/logo192.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-stone-800 text-stone-100 md:px-10">
      <a href="#!">
        <div className='flex gap-2 items-center'>
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className='text-2xl font-bold'>Pay</h1>
        </div>
      </a>
      <nav className='flex gap-8 items-center'>
        <a className='hover:opacity-75' href="#!">HOME</a>
        <a className='hover:opacity-75' href="#!">ABOUT</a>
        <a className='hover:opacity-75' href="#!">CONTACT US</a>
      </nav>
    </header>
  )
}

export default Header;