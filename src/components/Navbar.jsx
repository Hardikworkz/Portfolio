
const Navbar = () => {
    return (
      <nav className='h-1/3 mb-20 flex items-center justify-between py-6 x ' >
        <div id="logo" className=''>
          <img src="https://img.icons8.com/?size=80&id=EEBZaOS0K9cE&format=png" alt=""  className="h-20 pl-3 invert "/>
        </div>
        <div id="social" className="invert flex gap-3 pr-5 ">
          <a href="https://www.linkedin.com/in/hardiklalwani/" ><img src="https://img.icons8.com/?size=50&id=32292&format=png" alt="" className="h-7"/></a>
          <a href="https://www.instagram.com/sometimeshardik/"><img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="" className="h-7"/></a>
          <a href="https://github.com/Hardikworkz"><img src="https://img.icons8.com/?size=50&id=12599&format=png" alt="" className="h-7"/></a>
        </div>
      </nav>
    )
  }
  
  export default Navbar