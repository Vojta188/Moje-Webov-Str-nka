import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Container } from 'react-bootstrap';
import mainPictures3 from "./mainPictures3.jpg";
import mainPictures1 from "./mainPictures1.jpg";
import mainPictures4 from "./mainPictures4.png";
import "./body.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function Body() {
  const classes = useStyles();

  return (
      <div className = "ContainerBody">
      <Container >
          <div className ="card1">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={mainPictures3}
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p" className = "box1">
          Programování se věnuji již několik let. Zaměřuji se především na menší až střední projekty.
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>



    <div className ="card2">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={mainPictures1}
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p" className = "box1">
          K webovým a mobilním aplikacím používám NodeJs, React, ReactNative. Základní web dělám v HTML, CSS, Wordpress. 
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>



    <div className ="card3">
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={mainPictures4}
          title="Contemplative Reptile"
        />
        <CardContent>
          
          <Typography variant="body2" color="textSecondary" component="p" className = "box1">
          Zaměřuji se také na vývoj her pro PC, telefony. Hry stavím na unity enginu. Není problém pomoci s nahráním hry na google play nebo App Store
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </div>

   
    </Container>
    </div>
  );
}

export default Body;