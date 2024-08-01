
import background from '../../../public/img/home.png';
const Header = () => {
    return (
        <div>
           <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
      </ul>
    </div>
    <h3 className='text-3xl text-gray-400 font-bold'>Recipe Calories</h3>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><a className='text-white'>Home</a></li>
        <li><a className='text-white'>Recipes</a></li>
        <li><a className='text-white'>About</a></li>
        <li><a className='text-white'>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">

  <div  className="form-control mx-2 flex justify-start  items-start">
  
      <input  type="text" placeholder="     Search  ....." className="input input-bordered w-24 md:w-auto rounded-full  " />
    </div>

  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://i.ibb.co/d53FCfJ/ra3z-OOKa-Saiyl-K3lnw-27-A.webp" />
  </div>
</div>
  </div>
</div>


        <div className="">
        <div className="flex h-[600px] mt-8" style={{ background:`url(${background})`}}>
            <div className="w-[1250px] justify-center items-center p-24 ">
            <h4 className="text-6xl mt-7 font-bold">Discover an exceptional cooking class tailored for you!</h4>
            <p className="text-2xl mt-10 opacity-75">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems 
                to become an exceptionally well world-class Programmer.</p>

            <div className="mt-12 ml-48 text-4xl rounded-full">
                <button className="text-blue-950 bg-green-400  border-green-500  rounded-full text-4xl ">Explore Now</button>
                <button className="ml-12 rounded-full bg-transparent border-white">Our Feedback</button>
            </div>
            </div>
          

         </div>
        </div>

        </div>

      

    );
};

export default Header;