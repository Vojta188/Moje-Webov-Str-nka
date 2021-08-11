import React from "react";
import "./footer.css";
import GitHubLogo from "./GitHubLogo.png";
import InstagramLogo from "./InstagramLogo.png";
import LinkedInLogo from "./LinkedInLogo.png"
import LOGOWEB from "./LOGOWEB.png";

function Footer()
{
    return(
        <div className = "footer">
            <div className = "footertext">
                <div className = "name">
                <div className = "jmenotext">
                <p>Jméno: Vojtěch</p>
                </div>
                <div className ="prijmenitext">
                <p>Příjmení: </p>
                </div>
                <div className = "emailtext">
                <p>Email: klack0man01@gmail.com</p>
                </div>
                </div>
                
                <div className="logofooter">
                <img src={LOGOWEB} alt="LOGOWEBFOOTER" className = "LOGOWEBFOOTER" />
                </div>

                <div className = "loga">

                <div className = "github">
                <a href="https://github.com/Vojta188"><img src={GitHubLogo} alt="GitHubLogo" className = "GitHubLogo" /></a>
                </div>
                <div className = "instagram">
                <a href="https://www.instagram.com/crazy_game_plus/"><img src={InstagramLogo} alt="InstagramLogo" className = "InstagramLogo" /></a>
                </div>
                <div className = "linkedin">
                
                <a href=""><img src={LinkedInLogo} alt="LinkedInLogo" className = "LinkedInLogo" /></a>
                
                </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;