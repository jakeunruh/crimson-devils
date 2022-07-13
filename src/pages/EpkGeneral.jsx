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
        <section className="main__press">
          <h2 className="main__press-heading">Press</h2>
          <div className="main__press-card">
            <blockquote>
              <p>Since pared down to a trio from the four-piece incarnation they present here, Austin’s Crimson Devils first released their debut, A Taste for Blood, in 2017, but gave it a vinyl revisit last year and it’s little mystery why. The record comprises 11 sharply-composed tracks of Small Stone-style heavy rock, taking cues from Sasquatch in modern-via-classic modus, picking and choosing elements of ’70s and ’90s rock to conjure formidable groove and engaging hooks.
              </p>
              <p>
                &mdash; <a href="https://theobelisk.net/obelisk/2019/03/19/quarterly-review-spring-2019-day-2/" target="_blank" rel="noreferrer">The Obelisk</a>
              </p>
            </blockquote>
          </div>
          <div className="main__press-card">
            <blockquote>
              <p>
                You have to give the CRIMSON DEVILS one thing: Heavy Rock'n Roll is exactly the right description for what's coming out of the speakers. While related bands such as Double Crush Syndrome are much more reserved in comparison and therefore come across as catchier, the quartet from Texas spices up their sound with a good portion of mangyness and a light pinch of Stoner Rock.
              </p>
              <p>&mdash; <a href="https://www.hellfire-magazin.de/crimson-devils-a-taste-for-blood/" target="_blank" rel="noreferrer">Hellfire Magazine</a><br /><small><em>(Translated from German)</em></small></p>
            </blockquote>
          </div>

          <div className="main__press-card">
            <blockquote>
              <p>Over the years, the idea has been created that rock is dying, but each group that jumps onto the scene continues to show that the power of this musical genre has not faded even 5%.<br />Such is the case of Crimson Devils, a band with a genuine style that has been reflected throughout their career. His seven demos and his presentations at festivals such as SXSW have managed to gradually win over a following of fans that is on the rise so far.
            </p>
            <p>&mdash; <a href="https://www.indierocks.mx/musica/buenas-nuevas/crimson-devils-rock-roll-directo-de-austin-texas/" target="_blank" rel="noreferrer">Indie Rocks</a>
            <br />
            <small><em>(Translated from Spanish)</em></small></p>
            </blockquote>
          </div>

          <div className="main__press-card">
            <blockquote><p>Dirty and rough: heavy rock from the oil state<br />If some doom acts were to let themselves be lured out of their reserves and integrate a portion of high-energy rock into the sound, the result would probably sound similar to the current output of the CRIMSON DEVILS from Austin, Texas. The Americans definitely have a flair for dirty grooves and even dirtier riffs and are just as good with their occasional fast-forward attitude as with the frequent cross passes to the stoner segment. All in all, the material of "A Taste For Blood" may be far from all creative innovations, but such qualities are not in demand in the eleven new tracks. Instead, you want to experience snotty heavy rock - and the band serves it practically non-stop on the first try.
            </p>
            <p>&mdash; <a href="https://powermetal-de.translate.goog/review/review-Crimson_Devils/A_Taste_For_Blood,33232.html?_x_tr_sch=http&_x_tr_sl=de&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=sc" target="_blank" rel="noreferrer">PowerMetal.de</a><br /><small><em>(Translated from German)</em></small></p>
            </blockquote>
          </div>
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkGeneral
