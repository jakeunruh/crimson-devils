import "./styles/base.scss";
import Logo from "./img/logo.svg";
import Bird from "./img/bird.svg";
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title" hidden="">Crimson Devils</h1>
        <img className="header__img--logo" src={Logo} alt="" />
        <img className="header__img--bird" src={Bird} alt="" />
      </header>
      <main className="main">
        <ul className="main__link-list">
          <li className="main__link-list-item">
            <a className="btn" href="https://crimsondevils.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a>
          </li>
          <li className="main__link-list-item">
            <a className="btn" href="https://open.spotify.com/artist/13hX3egfYRRehDG53kTO1O" target="_blank" rel="noreferrer">Spotify</a>
          </li>
        </ul>
      </main>
      <footer className="footer">
        <ul className="footer__social-link-list">
          <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.instagram.com/crimsondevilsatx/" bgColor="#b81a0a" color="currentColor" target="_blank" />
          </li>
          <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.facebook.com/crimsondevils/" bgColor="#b81a0a" color="currentColor" target="_blank" />
          </li>
          <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.youtube.com/channel/UCCCPUW7c9Ox0CKSKG8iGegg/videos" bgColor="#b81a0a" color="currentColor" target="_blank" />
          </li>
        </ul>
      </footer>
    </>
    
  );
}

export default App;
