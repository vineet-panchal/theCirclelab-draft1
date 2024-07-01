import '../css/Contact.css';

import tmulogo from '../assets/tmu-logo-one-colour-removebg-preview-modified.png';
import circlelogo from '../assets/unnamed.png';

import { useLocation } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <div className="contact-ctr" id="contact">
        <div className="contact-left-ctr">
          <img className="circle-logo" src={circlelogo} alt="circle-logo" />
          <div className="contact-left-info-ctr">
            <p className="contact-left-info">
              <span className="contact-left-highlights">Email:</span> thecirclelab@torontomu.ca
            </p>
            <p className="contact-left-info">
              <span className="contact-left-highlights">Tel:</span> (+1) 416.979.5063
            </p>
            <p className="contact-left-info">
              <span className="contact-left-highlights">Fax:</span> (+1) 416.979.5064
            </p>
            <div className="contact-icons">
              <a href="https://www.instagram.com/the.circle.lab/" target="_blank">
                <img className="instagram" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/>
              </a>
              <a href="https://twitter.com/the_CIRCLE_lab" target="_blank">
                <img className="twitter" src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v2.png" alt="twitterx--v2"/>
              </a>
              <a href={useLocation().pathname} target="_blank">
                <img className="website" src="https://img.icons8.com/ios/50/FFFFFF/globe--v1.png" alt="globe--v1"/>
              </a>  
            </div>
          </div>
        </div>
        <div className="contact-right-ctr">
          <img className="tmu-logo" src={tmulogo} alt="tmu-logo" />
          <div className="contact-right-info-ctr">
            <p className="contact-right-info">Toronto Metropolitan University</p>
            <p className="contact-right-info">Department of Computer Science</p>
            <p className="contact-right-info">George Vari Engineering and Computing Centre</p>
            <p className="contact-right-info">245, Church Street, Toronto. ON.</p>
            <p className="contact-right-info">Ontario, Canada, M5B2K3</p>
          </div>
        </div>
      </div>  
      <div className="contact-footer-ctr">
        <p className="copyright-mark">© 2023 - the CIRCLE lab</p>
      </div>  
    </>
  )
}

export default Contact;
