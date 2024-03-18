// import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img
        className="w-[7rem] h-[7rem] mx-auto my-4 rotate-12 object-contain"
        src={logo}
        alt="A list"
      />
      <h1 className="font-bold text-2xl text-center text-color-primary">
        Task Management App
      </h1>
    </header>
  );
}

export default Header;
