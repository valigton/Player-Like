import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';

import Play from '../../assets/play-small-player-w.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'transparent',
    color: '#ffffff',
    boxShadow: '0 2px 2px -2px white',
    '& .MuiAccordionSummary-expandIcon': {
      transform: 'none',
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ExpansionPanel({ id, img, synp, title })  {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  id = id.slice(5, 6);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  }

  return (
    <Accordion className={classes.root} expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary expandIcon={<img src={Play} alt="Play Icon"/>}>
        <Typography className={classes.heading}>{id} {title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <img src={img} width={350} alt="episode-preview"/>
          <p>{synp}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}