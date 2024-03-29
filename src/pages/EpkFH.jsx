import BandSection from "../components/BandSection";
import EmbedFH from "../components/EmbedFH";
import HeaderSmall from "../components/HeaderSmall"
import SocialLinkList from "../components/SocialLinkList";
import FH from "../img/epk/fh-hi-res.png";
import VideoFLTLT from "../components/VideoFLTLT"
import React from "react";

function EpkFH() {
  return (
    <>
      <HeaderSmall />
      <main className="main">
        <h1>Forever High - Second Album from Crimson Devils</h1>
        <section className="main__album-audio">
          <section className="album">
            <img src={FH} alt="Forever High Album Art" />
          </section>
          <section className="audio">
            <h2>Listen Now</h2>
            <EmbedFH />
          </section>
        </section>
        <section className="main__description-tracklist">
          <section className="description">
            <h2>Description</h2>
            <p>Hailing from Austin, Texas, <strong>Crimson Devils</strong> is a power trio that holds its roots in the more excitable, heavier side of rock and roll. By blazing a trail with their own high-powered attitude and vision, they have separated themselves from the masses and made room to create something truly worth hearing.</p>
            <p>As the second release from Crimson Devils, <strong>Forever High</strong> is a progression and elevation of all the things that the band does best. Driving energy, tight grooves and all the amplitude pushed to the limit. <strong>Forever High</strong> hands out eleven tight, focused cuts that showcase the band's power, technical abilities and the capability to write a song with a hook. No filler here, just all the band's best work in one tasty place.</p>
            <p>Recorded and mixed by Jason Morales at the BBQ Shack.</p>
            <p>Mastered by Jerry Tubb at Terra Nova Mastering, Austin, Texas</p>
          </section>
          <section className="tracklist">
            <h2>Tracklist</h2>
            <ol>
              <li>Feels Like The Last Time</li>
              <li>Forever High</li>
              <li>Home Again</li>
              <li>Not My Time</li>
              <li>Used Up</li>
              <li>Count Back From Ten</li>
              <li>Feign Free</li>
              <li>Pressure Vessels</li>
              <li>Lost My Mind</li>
              <li>We Walk Alone</li>
              <li>King Of The World</li>
            </ol>
          </section>
        </section>
        <section className="main__band">
          <section className='main__band-image'>
          </section>
          <section className="main__band-info">
            <BandSection />
          </section>
        </section>
        <section className="main__feature-video">
          <VideoFLTLT />
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkFH
