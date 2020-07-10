import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Box, Typography } from '@material-ui/core';

import ExpansionPanel from '../ExpansionPanel/index.js'

const styles = makeStyles(() => ({
	root: {
		backgroundColor: 'transparent',
		boxShadow: '0 2px 2px -2px white',
		color: '#ffffff',
		'& .PrivateTabIndicator-colorSecondary-4': {
			backgroundColor: '#32ad65'
		},
		'& .MuiTab-root': {
			minWidth:'50px',
		}
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function List() {
	const classes = styles();
	const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return(
		<>
			<Paper className={classes.root}>
	      <Tabs
	        value={value}
	        onChange={handleChange}
	      >
	        <Tab value="1" label="T1" />
	        <Tab value="2" label="T2" />
	        <Tab value="3" label="T3" />
	      </Tabs>
	    </Paper>
	    <TabPanel value={value} index="1">
	        <ExpansionPanel />
	    </TabPanel>
	    <TabPanel value={value} index="2">
	        Item Two
	    </TabPanel>
	    <TabPanel value={value} index="3">
	        Item Three
	    </TabPanel>
    </>
	)
}