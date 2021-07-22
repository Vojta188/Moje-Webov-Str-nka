import React from "react";
import "./formular.css";
class NameForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email:"",
            Jmeno_Prijmeni:"",
            Zpraha:"",
        }
    }

    render()
    {
        return(
            <div className = "NameForm">
                <div className = "emailDiv">
                    <label className = "center">e-mail</label>
                <input type = "email" className = "email" id = "email" />
                </div>
                <div className = "jmeno_prijmeniDiv">
                <label className = "center">Jméno a Příjmení</label>
                <input type = "text" className = "jmeno_prijmeni" id = "jmeno_prijmeni"/>
            </div>

           
            <div className="druh_zakazky">
            
           
            <div className = "float">
                <label>Webové Aplikace </label>
                <div>
            <input type ="checkbox" className = "webovaaplikace" id = "webovaaplikace" />
            </div>
            </div>
            
            <div className = "float">
            <label>Webové Stránky </label>
            <div>
            <input type ="checkbox" className = "webovestranky" id ="webovestranky" />
            </div>
            </div>
            
            
            <div className = "float">
            <label>Hra v Unity</label>
            <div>
            <input type ="checkbox" className = "hravunity" id ="hravunity" />
            </div>
            </div>

            <div className = "float">
            <label>Mobilní Aplikace</label>
            <div>
            <input type ="checkbox" className = "mobilniaplikace" id = "mobilniaplikace" />
            </div>
            </div>
            
            </div>
           
            <div className = "zpravaDiv">
                <label className = "centerzprava">Zpráva</label>
                <textarea className = "zprava" id = "zprava"  />
            </div>

            <div className = "btn">
                <input type = "button" value = "odeslat" className = "button" id = "button"/>
            
            </div>
            </div>
            
        )
    }
    
}

export default NameForm;