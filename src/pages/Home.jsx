import Header from "../components/Header"
import Video from "../components/Video";
import LinkList from "../components/LinkList";
import SocialLinkList from "../components/SocialLinkList";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Video />
        <LinkList />
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
    
  );
}

export default Home;
