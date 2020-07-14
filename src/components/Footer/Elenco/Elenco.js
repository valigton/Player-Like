import React from 'react'
import { makeStyles, Card, CardContent } from '@material-ui/core'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const styles = makeStyles(() => ({
	root: {
		margin: '20px',
		'& .MuiCard-root': {
			background: '#212123',
			color: '#ffffff',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '250px',
		}
	},
}))

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default function Elenco() {
	const classes = styles()
	const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

	return (
	  <Slider {...settings} className={classes.root}>
	  	<Card >
	  		<CardContent>
	        <h3>Matt Demon</h3>
	        <p>Mark Watney</p>
	      </CardContent>
	    </Card>
	    <Card>
	  		<CardContent>
	        <h3>Jessica Chastain</h3>
	        <p>Melissa Lewis</p>
	  		</CardContent>
	    </Card>
	    <Card>
	  		<CardContent>
	       	<h3>Chiwetel Ejiofor</h3>
	     		<p>Venkat Kapoor</p>
	     	</CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Eva Green</h3>
	        <p>Vanessa Ives</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Josh Hartnett</h3>
	        <p>Ethan Chandler</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	    	  <h3>Rory Kinnear</h3>
	        <p>Frankenstain's monster</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Timothy Dalton</h3>
	        <p>Sir Malcolm Murray</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Billie Piper</h3>
	        <p>Brona Croft</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Reeve Carney</h3>
	        <p>Dorian Gray</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Harry Treadaway</h3>
	        <p>Victor Frankenstain</p>
	      </CardContent>
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Helen McCrory</h3>
	        <p>Madame Kali</p>
	      </CardContent>  
	    </Card>
	    <Card>
	    	<CardContent>
	        <h3>Patti LuPone</h3>
	        <p>Dr John Seward</p>
	      </CardContent>
	    </Card>
  	</Slider>
	)
}