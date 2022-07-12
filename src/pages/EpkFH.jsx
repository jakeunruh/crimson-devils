import FHEmbed from "../components/FHEmbed";
import HeaderSmall from "../components/HeaderSmall"
import SocialLinkList from "../components/SocialLinkList";

function EpkFH() {
  return (
    <>
      <HeaderSmall />
      <main className="main">
        <h1>Forever High - New Album from Crimson Devils</h1>
        <section className="main__bio-releases">
          <section className="bio">
            <h2>Forever High is the upcoming release from Crimson Devils</h2>
            <p>Recorded at the BBQ Shack in Austin, Tx with Jason Morales, Forever High is the second record for Crimson Devils.</p>
          </section>
          <section className="releases">
            <h2>Listen Now</h2>
            <FHEmbed />
          </section>
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default EpkFH
