import Logo from "../img/logo.svg";
import Bird from "../img/bird.svg";

function Header() {
  return (
    <header className="header">
        <h1 className="header__title" hidden="">Crimson Devils</h1>
        <img className="header__img--logo" src={Logo} alt="" />
        <img className="header__img--bird" src={Bird} alt="" />
      </header>
  )
}

export default Header
