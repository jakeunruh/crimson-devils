import "../styles/link-list.scss";
import React from "react";

function LinkList() {
  return (
    <ul className="main__link-list">
        <li className="main__link-list-item">
            <a className="btn" href="https://crimsondevils.bandcamp.com/" target="_blank" rel="noreferrer">Bandcamp</a>
        </li>
        <li className="main__link-list-item">
            <a className="btn" href="https://open.spotify.com/artist/13hX3egfYRRehDG53kTO1O" target="_blank" rel="noreferrer">Spotify</a>
        </li>
    </ul>
  )
}

export default LinkList
