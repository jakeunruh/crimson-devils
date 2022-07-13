import ATFBEmbed from "../components/ATFBEmbed";
import HeaderSmall from "../components/HeaderSmall"
import SocialLinkList from "../components/SocialLinkList";
import VideoBNB from "../components/VideoBNB";
import VideoSJ from "../components/VideoSJ";
import Curt from "../img/curt.jpg";
import Patrick from "../img/patrick.jpg";
import Jake from "../img/jake.jpg";
import Band from "../img/epk/crimson-devils-8x10.jpg";
import BandHi from "../img/epk/crimson-devils-8x10.png";
import BandTruck from "../img/epk/crimson-devils-truck-small.jpg";
import BandTruckHi from "../img/epk/crimson-devils-truck.png";

function EpkGeneral() {
  return (
    <>
      <HeaderSmall />
      <main className="main">
        <h1>Crimson Devils - Musical Artist Press Kit</h1>
        <section className="main__bio-releases">
          <section className="bio">
            <h2>Approved artist bio for immediate release</h2>
            <p>They self-released their first full length in the summer of 2017. </p>
          </section>
          <section className="releases">
            <h2>Releases</h2>
            <ATFBEmbed />
          </section>
        </section>
        <section className="main__photos">
          <h2 className="main__photos-heading">Photos</h2>
          <div className="main__photos-photo">
            <a href={BandTruckHi}><img src={BandTruck} alt="Curt Christenson" /></a>
          </div>
          <div className="main__photos-photo">
            <a href={Curt}><img src={Curt} alt="Curt Christenson" /></a>
          </div>
          <div className="main__photos-photo">
            <a href={Patrick}><img className="main__photos-photo" src={Patrick} alt="Patric Pascucci" /></a>
          </div>
          <div className="main__photos-photo">
            <a href={Jake}><img className="main__photos-photo" src={Jake} alt="Jake Unruh" /></a>
          </div>
        </section>
        <section className="main__videos">
          <h2 className="main__video-heading">Video</h2>
          <div className="main__videos-video">
            <VideoSJ />
            <h4>Stoner Jam 2022</h4>
          </div>
          <div className="main__videos-video">
            <VideoBNB />
            <h4>Bad News Blues</h4>
          </div>
        </section>
        <section className="main__promo">
          <a href={BandHi}><img className="main__photos-photo" src={Band} alt="Jake Unruh" /></a>
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkGeneral
