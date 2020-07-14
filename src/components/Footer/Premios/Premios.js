import React from 'react'
import { makeStyles } from '@material-ui/core'
import Slider from 'react-slick'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
		},
		'& .MuiCardContent-root:last-child': {
			paddingBottom: '12px',
		},
	},
}))

export default function Premios() {
	const classes = styles()
	const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

	return (
	  <Slider {...settings} className={classes.root}>
	  	<Card className={classes.card}>
	  		<CardContent>
	        <h4>BAFTA Television Craft Award</h4>
	        <p>Best Make Up and Hair Design</p>
	        <p>2015</p>
	      </CardContent>
	    </Card>

	    <Card className={classes.card}>
	  		<CardContent>
	        <h4>BAFTA Television Craft Award</h4>
	        <p>Best Original Music</p>
	        <p>2015</p>
	  		</CardContent>
	    </Card>

	    <Card className={classes.card}>
	  		<CardContent>
	       	<h4>BAFTA Television Craft Award</h4>
	     		<p>Production Design</p>
	       	<p>2015</p>
	     	</CardContent>
	    </Card>

	    <Card className={classes.card}>
	    	<CardContent>
	        <h4>BFDG Award</h4>
	        <p>Best TV Show</p>
	        <p>2015</p>
	      </CardContent>
	    </Card>

	    <Card className={classes.card}>
	    	<CardContent>
	        <h4>Jury Award</h4>
	        <p>Best Pilot - Xavi Giménez</p>
	        <p>2015</p>
	      </CardContent>
	    </Card>

	    <Card className={classes.card}>
	    	<CardContent>
	    	  <h4>Critics' Choice TV Award</h4>
	    	  <p>2014</p>
	        <p>Most Exciting New Series</p>
	      </CardContent>
	    </Card>
  	</Slider>
	)
}