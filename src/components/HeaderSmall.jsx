import Logo from "../img/logo.svg";

function HeaderSmall() {
  return (
    <header className="header-small">
      <img className="header-small__img--logo" src={Logo} alt="Crimson Devils" />
      <a href="/">HOME</a>
    </header>
  )
}

export default HeaderSmall