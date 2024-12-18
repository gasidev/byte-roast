import searchIcon from "../images/search.png";
import shoppingIcon from "../images/shopping-cart.png";
import userIcon from "../images/user.png";
import menuIcon from "../images/menu.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-h-[25px] text-navy-blue pt-[20px] md:pt-[30px]">
      <button className="h-[25px] md:hidden">
        <img src={menuIcon} className="w-[25px]" />
      </button>
      <div className="flex justify-center items-center md:mx-0 space-x-[30px]">
        <h1 className="md:left-0 text-center font-playfair text-[36px] font-black">
          byte roast
        </h1>

        <ul className="hidden md:inline-flex md:space-x-[10px] lg:space-x-[30px] font-playfair font-bold text-[24px]">
          <li>
            <a href="#">coffee</a>
          </li>
          <li>
            <a href="#">matcha</a>
          </li>
          <li>
            <a href="#">equipment</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
        </ul>
      </div>
      <div className="w-[70px] md:w-[345px] inline-flex items-center md:space-x-[30px]">
        <button className="hidden md:block w-[180px] h-[50px] text-[24px] font-bold text-latte font-playfair rounded-[50px] bg-green">
          subscribe
        </button>
        <div className="space-x-[20px]">
          <button className="w-[25px] ">
            <img src={searchIcon} />
          </button>

          <button className="hidden w-[25px] md:inline-block">
            <img src={userIcon} />
          </button>

          <button className="w-[25px] ">
            <img src={shoppingIcon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
