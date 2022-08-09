import Header from "../components/Header"
import VideoSJ from "../components/VideoSJ";
import LinkList from "../components/LinkList";
import SocialLinkList from "../components/SocialLinkList";
import React from "react";
import ShowWidget from "../components/ShowWidget";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <ShowWidget />
        <section className="main__feature-video">
          <VideoSJ />
        </section>
        <LinkList />
      </main>
      <footer className="footer">
        <SocialLinkList />
      </footer>
    </>
    
  );
}

export default Home;
