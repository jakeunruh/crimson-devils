import { SocialIcon } from 'react-social-icons';

function SocialLinkList() {
  return (
    <ul className="footer__social-link-list">
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.instagram.com/crimsondevilsatx/" bgColor="#b81a0a" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.facebook.com/crimsondevils/" bgColor="#b81a0a" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://soundcloud.com/crimsondevilsatx" bgColor="#b81a0a" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.youtube.com/channel/UCCCPUW7c9Ox0CKSKG8iGegg/videos" bgColor="#b81a0a" color="currentColor" target="_blank" />
        </li>
    </ul>
  )
}

export default SocialLinkList
