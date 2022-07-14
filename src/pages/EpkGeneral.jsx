import EmbedATFB from "../components/EmbedATFB";
import HeaderSmall from "../components/HeaderSmall"
import SocialLinkList from "../components/SocialLinkList";
import Band from "../img/epk/crimson-devils-8x10.jpg";
import BandHi from "../img/epk/crimson-devils-8x10.png";
import PressSection from "../components/PressSection";
import VideoSection from "../components/VideoSection";
import PhotosSection from "../components/PhotosSection";

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
            <EmbedATFB />
          </section>
        </section>
        <section className="main__photos">
          <h2 className="main__photos-heading">Photos</h2>
          <PhotosSection />
        </section>
        <section className="main__videos">
          <h2 className="main__video-heading">Video</h2>
          <VideoSection />
        </section>
        <section className="main__promo">
          <a href={BandHi}><img className="main__photos-photo" src={Band} alt="Jake Unruh" /></a>
        </section>
        <section className="main__press">
          <h2 className="main__press-heading">Press</h2>
          <PressSection />
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkGeneral
