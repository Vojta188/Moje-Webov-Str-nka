import React from "react";
import "./formular.css";
import axios from "axios";
const API = "http://localhost:8080/customers"
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
            webApp:false,
            webPage:false,
            Game:false,
            MobileApp:false,
            webSave:""
            
            
        }
        this.emailchange = this.emailchange.bind(this);
        this.Jmeno_PrijmeniChange = this.Jmeno_PrijmeniChange.bind(this); 
        this.Zpravachange = this.Zpravachange.bind(this);
        this.webAppchange = this.webAppchange.bind(this);
        this.webPagechange = this.webPagechange.bind(this);
        this.Gamechange = this.Gamechange.bind(this);
        this.MobileAppchange = this.MobileAppchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    webAppchange(checked)
    {
        
        this.setState({webApp:checked});
    }

    webPagechange(checked)
    {
        this.setState({webPage:checked});
    }

    Gamechange(checked)
    {
        this.setState({Game:checked});
    }

    MobileAppchange(checked)
    {
        this.setState({MobileApp:checked});
    }

    handleSubmit(e)
    {
        e.preventDefault()
        

        
        if(this.state.webApp == true)
        {
            this.state.webSave = "Webová Aplikace"
        }

        if(this.state.webPage == true)
        {
            this.state.webSave = "Webová Stránka"
        }

        if(this.state.Game)
        {
            this.state.webSave = "Hra v Unity"
        }

        if (this.state.MobileApp == true)
        {
            this.state.webSave ="Mobilní Aplikace"
        }

        
        
        


        
        
        const save = 
        {
            email:this.state.email,
            jmeno_prijmeni:this.state.Jmeno_Prijmeni,
            webova_aplikace:this.state.webSave,
            zprava:this.state.Zprava
        }

        
        fetch('http://localhost:8080/customers', {
            mode: 'no-cors',
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({save})
}).then(res => res.json())
  .then(res => console.log(res));
        


        
    }
  

    render()
    {
        return(
            <div className = "NameForm">
                <form onSubmit = {this.handleSubmit}>
                <div className = "emailDiv">
                    <label className = "center">e-mail</label>
                <input type = "email" className = "email" id = "email" value = {this.state.email} onChange = {e => this.emailchange(e.target.value)} />
                </div>
                <div className = "jmeno_prijmeniDiv">
                <label className = "center">Jméno a Příjmení</label>
                <input type = "text" className = "jmeno_prijmeni" id = "jmeno_prijmeni" value={this.state.Jmeno_Prijmeni} onChange={e=>this.Jmeno_PrijmeniChange(e.target.value)} />
            </div>

           
            <div className="druh_zakazky">
            
           
            <div className = "float">
                <label>Webové Aplikace </label>
                <div>
            <input type ="checkbox" className = "webovaaplikace" id = "webovaaplikace" checked={this.state.webApp} onChange={e=>this.webAppchange(e.target.checked)} />
            </div>
            </div>
            
            <div className = "float">
            <label>Webové Stránky </label>
            <div>
            <input type ="checkbox" className = "webovestranky" id ="webovestranky" checked={this.state.webPage} onChange={e=>this.webPagechange(e.target.checked)} />
            </div>
            </div>
            
            
            <div className = "float">
            <label>Hra v Unity</label>
            <div>
            <input type ="checkbox" className = "hravunity" id ="hravunity" checked={this.state.Game} onChange={e=>this.Gamechange(e.target.checked)} />
            </div>
            </div>

            <div className = "float">
            <label>Mobilní Aplikace</label>
            <div>
            <input type ="checkbox" className = "mobilniaplikace" id = "mobilniaplikace" checked={this.state.MobileApp} onChange={e=>this.MobileAppchange(e.target.checked)} />
            </div>
            </div>
            
            </div>
           
            <div className = "zpravaDiv">
                <label className = "centerzprava">Zpráva</label>
                <textarea className = "zprava" id = "zprava" value = {this.state.Zprava} onChange={e=>this.Zpravachange(e.target.value)}  />
            </div>

            <div className = "btn">
                <input type = "submit" value = "odeslat" className = "button" id = "button"/>
            
            </div>
            </form>
            </div>
            
        )
    }
    
}

export default NameForm;