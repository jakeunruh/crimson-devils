import Header from "../components/Header"
import VideoSJ from "../components/VideoSJ";
import LinkList from "../components/LinkList";
import SocialLinkList from "../components/SocialLinkList";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__feature-video">
          <VideoSJ />
        </div>
        <LinkList />
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
    
  );
}

export default Home;
