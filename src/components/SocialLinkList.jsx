import { SocialIcon } from 'react-social-icons';
import "../styles/social-link-list.scss";

function SocialLinkList() {
  return (
    <ul className="footer__social-link-list">
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.instagram.com/crimsondevilsatx/" bgColor="#ac0f1b" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.facebook.com/crimsondevils/" bgColor="#ac0f1b" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://soundcloud.com/crimsondevilsatx" bgColor="#ac0f1b" color="currentColor" target="_blank" />
        </li>
        <li className="footer__social-link-list-item">
            <SocialIcon url="https://www.youtube.com/channel/UCCCPUW7c9Ox0CKSKG8iGegg/videos" bgColor="#ac0f1b" color="currentColor" target="_blank" />
        </li>
    </ul>
  )
}

export default SocialLinkList
