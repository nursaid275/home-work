
function Header() {
  return (
    <header className="max-w-360 mx-auto flex justify-between items-center px-12.5 py-10.75 bg-[#191919]">
      <h1 className="text-white text-[32px] font-bold">
        Castaway
      </h1>

      <nav>
        <ul className="flex gap-10">
          <li>
            <a href="#" className="text-white text-[17px] hover:text-[#118DA8]">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="text-white text-[17px] hover:text-[#118DA8]">
              Episodes
            </a>
          </li>

          <li>
            <a href="#" className="text-white text-[17px] hover:text-[#118DA8]">
              About
            </a>
          </li>

          <li>
            <a href="#" className="text-white text-[17px] hover:text-[#118DA8]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
