import React from  "react";
import LOGOWEB from "./LOGOWEB.png";
import mainPictures from "./mainPictures.jpg";
import mainPictures1 from "./mainPictures1.jpg";
import mainPictures2 from "./mainPictures2.jpg";
import "./headers.css";
import {Carousel} from 'react-bootstrap';


function FunctionHeader() {

return (
    
      
    <div className = "headerohraniceni">
          <div className = "headerDiv">
              <div className = "img">
              <img src={LOGOWEB} alt="Logo" className = "logo" />
              </div>
            <div className = "h1">
            <h1>Crazy TechTips With Me</h1>  
            </div>
            <div className = "carousel">
            <Carousel className = "carousel">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={mainPictures1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Vítejte na stránce Crazy TechTips With Me</h3>
      <p>Jsem programátor a technologický nadšenec.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={mainPictures}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Nabízím programátorské služby.</h3>
    <p>Pro bližší informace stačí vyplnit dotazník dole nebo se ozvat na email.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={mainPictures2}
      alt="Third slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
          </div>
       </div>   
         
            
          
        
      
    
  );
}

export default FunctionHeader