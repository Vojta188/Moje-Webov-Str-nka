import React from "react";
import "./footer.css";

function Footer()
{
    return(
        <div className = "footer">
            <div className = "footertext">
                <div className = "jmenotext">
                <p>Jméno: Vojtěch</p>
                </div>
                <div className ="prijmenitext">
                <p>Příjmení: Vrabec</p>
                </div>
                <div className = "emailtext">
                <p>Email: klack0man01@gmail.com</p>
                </div>
                <div className = "github">
                <a href="https://github.com/Vojta188">Github</a>
                </div>
                <div className = "instagram">
                <a href="https://www.instagram.com/crazy_game_plus/">Instagram</a>
                </div>

            </div>
        </div>
    )
}
export default Footer;