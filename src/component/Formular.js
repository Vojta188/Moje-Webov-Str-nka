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
            Zprava:"",
            webApp:true,
            webPage:true,
            Game:true,
            MobileApp:true
            
        }
        this.emailchange = this.emailchange.bind(this);
        this.Jmeno_PrijmeniChange = this.Jmeno_PrijmeniChange.bind(this); 
        this.Zpravachange = this.Zpravachange.bind(this);
        this.webAppchange = this.webAppchange.bind(this);
        this.webPagechange = this.webPagechange.bind(this);
        this.Gamechange = this.Gamechange.bind(this);
        this.MobileAppchange = this.MobileAppchange.bind(this);
    }

    emailchange(value)
    {
        this.setState({email:value});
    }

    Jmeno_PrijmeniChange(value)
    {
        this.setState({Jmeno_Prijmeni:value});
    }

    Zpravachange(value)
    {
        this.setState({Zprava:value});
    }

    webAppchange(value)
    {
        this.setState({webApp:value});
    }

    webPagechange(value)
    {
        this.setState({webPage:value});
    }

    Gamechange(value)
    {
        this.setState({Game:value});
    }

    MobileAppchange(value)
    {
        this.setState({MobileApp:value});
    }

    handleSubmit(e)
    {
        e.preventDefault();
    }

    render()
    {
        return(
            <div className = "NameForm">
                <div className = "emailDiv">
                    <label className = "center">e-mail</label>
                <input type = "email" className = "email" id = "email" onChange = {e => this.emailchange(e.target.value)} value = {this.state.email} />
                </div>
                <div className = "jmeno_prijmeniDiv">
                <label className = "center">Jméno a Příjmení</label>
                <input type = "text" className = "jmeno_prijmeni" id = "jmeno_prijmeni"/>
            </div>

           
            <div className="druh_zakazky">
            
           
            <div className = "float">
                <label>Webové Aplikace </label>
                <div>
            <input type ="checkbox" className = "webovaaplikace" id = "webovaaplikace" onChange = {e => this.webAppchange(e.target.type === 'checkbox' ? e.target.checked : e.target.value)} />
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