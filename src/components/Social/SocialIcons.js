import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaGoogle,FaLinkedin} from "react-icons/all";
import { SocialIcon } from 'react-social-icons';
const SocialIcons = () => {
    return (
        <div className="social-container">
             <SocialIcon
            network="google"
            url="g.dev/piratechetan"
            style={{ height: 40, width: 40, marginRight: 15 }}
            bgColor="#EA4335"
            fgColor="#fff"
          />
           <SocialIcon
            url="https://m.facebook.com/chetan.sharma.83"
            style={{ height: 40, width: 40, marginRight: 15 }}
            bgColor="#fff"
            fgColor="#4267B2"
          />

          <SocialIcon
            network="github"
            style={{ height: 40, width: 40, marginRight: 15 }}
            bgColor="#000"
            fgColor="#fff"
          />
          <SocialIcon
            network="linkedin"
            style={{ height: 40, width: 40, marginRight: 15 }}
            bgColor="#0077b5"
            fgColor="#fff"
          />
          <SocialIcon
            network="instagram"
            style={{ height: 40, width: 40, marginRight: 15 }}
            bgColor="#8a3ab9"
            fgColor="#fff"
          />
        </div>
    )
}

export default SocialIcons
