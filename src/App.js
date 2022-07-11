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
        <div className="main__video-wrapper">
          <h2>Watch Crimson Devils at the 2022 Stoner Jam at The Far Out Lounge in Austin, Tx</h2>
          <div className="main__video">
          <iframe width="560"cheight="315" src="https://www.youtube.com/embed/Y8Wp3dafaMQ&autoplay=1" srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/xl-XjjI-d3Y?start=844><img src='https://raw.githubusercontent.com/jakeunruh/crimson-devils/0bc6e1d3b9de49fbd8589c902a8145ecfe817687/src/img/cd-sj-vid.jpg' alt='Austin Stoner Jam 2022 - Sampler Vol 1'><span>▶</span></a>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Austin Stoner Jam 2022 - Sampler Vol 1"></iframe>
          </div>
        </div>
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
