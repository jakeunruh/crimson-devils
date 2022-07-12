import BandSection from "../components/BandSection";
import FHEmbed from "../components/FHEmbed";
import HeaderSmall from "../components/HeaderSmall"
import SocialLinkList from "../components/SocialLinkList";
import FH from "../img/epk/fh-hi-res.png";

function EpkFH() {
  return (
    <>
      <HeaderSmall />
      <main className="main">
        <h1>Forever High - New Album from Crimson Devils</h1>
        <section className="main__album-audio">
          <section className="album">
            <img src={FH} alt="Forever High Album Art" />
          </section>
          <section className="audio">
            <h2>Listen Now</h2>
            <FHEmbed />
          </section>
        </section>
        <section className="main__description-tracklist">
          <section className="description">
            <h2>Forever High is the upcoming release from Crimson Devils</h2>
            <p>Recorded at the BBQ Shack in Austin, Tx with Jason Morales, Forever High is the second record for Crimson Devils.</p>
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
          <BandSection />
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkFH
