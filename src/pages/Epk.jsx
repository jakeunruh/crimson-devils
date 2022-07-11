import ATFBEmbed from "../components/ATFBEmbed";
import Header from "../components/Header"
import SocialLinkList from "../components/SocialLinkList";

function Epk() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>Electronic Press Kit for Crimson Devils</h1>
        <section className="main__upper-content">
          <section className="bio">
            <h3>Crimson Devils are a working band from Austin, Tx formed in 2012.</h3>
            <p>They self-released their first full length in the summer of 2017. </p>
          </section>
          <ATFBEmbed />
        </section>
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
  )
}

export default Epk
