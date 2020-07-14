import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Typography } from '@material-ui/core';

import ExpansionPanel from './ExpansionPanel.js';

import api from '../../services/api.js';

const styles = makeStyles(() => ({
	root: {
		backgroundColor: 'transparent',
		boxShadow: '0 2px 2px -3px white',
		color: '#ffffff',
		'& .PrivateTabIndicator-colorSecondary-4': {
			backgroundColor: '#32ad65'
		},
		'& .MuiTab-root': {
			minWidth:'50px',
		},
	},
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

export default function List() {
	const classes = styles();
	const [value, setValue] = useState('1');
	const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
  	async function loadEpisodes() {
      const response = await api.get('/episodes/SHOW123.json');
      setData(response.data);
    }
    loadEpisodes();
  }, [])

	return (
		<>
			<Paper className={classes.root}>
	      <Tabs value={value} onChange={handleChange}>
	        <Tab value="1" label="T1" />
	        <Tab value="2" label="T2" />
	        <Tab value="3" label="T3" />
	      </Tabs>
	    </Paper>
	    <TabPanel value={value} index="1">
	    	{data ? 
	    		data.map(episode => (
	    			episode ? 
		        	<ExpansionPanel 
		        		id={episode.ID} 
		        		img={episode.Image} 
		        		synp={episode.Synopsis} 
		        		title={episode.Title}
		        	/>
	        	: ''
	    		))
	    	: ''}
	    </TabPanel>
	    <TabPanel value={value} index="2">
	    	{data ? 
	    		data.map(episode => (
	    			episode ? 
		        	<ExpansionPanel 
		        		id={episode.ID} 
		        		img={episode.Image} 
		        		synp={episode.Synopsis} 
		        		title={episode.Title}
		        	/>
	        	: ''
	    		))
	    	: ''}
	    </TabPanel>
    </>
	)
}