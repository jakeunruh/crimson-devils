import React from 'react'
import "../styles/atfb-embed.scss";

function ATFBEmbed() {
  return (
    <section className='iframe iframe--atfb'>
        <iframe title="A Taste For Blood Full Length Album" width="100%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1466977072&color=%23b81a0a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <div>
            <a href="https://soundcloud.com/crimsondevilsatx" title="Crimson Devils" rel="noreferrer" target="_blank">Crimson Devils</a> · <a href="https://soundcloud.com/crimsondevilsatx/sets/a-taste-for-blood" title="Forever High" rel="noreferrer" target="_blank">A Taste for Blood</a>
        </div>
    </section>
  )
}

export default ATFBEmbed
