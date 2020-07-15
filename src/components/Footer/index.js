import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Tabs, Tab, Typography } from '@material-ui/core'

import api from '../../services/api.js'

import Logo from '../../assets/logo-telecine.svg'

import Geral from './Geral/Geral.js'
import Elenco from './Elenco/Elenco.js'
import Premios from './Premios/Premios.js'

const styles = makeStyles(() => ({
	main: {
		padding: '0 50px',
		zIndex: '1',
		position: 'relative',
		backgroundColor: '#13171a',
		height: '22vh',
	},
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItens: 'center',
		backgroundColor: 'transparent',
		boxShadow: '0 2px 2px -3px white',
		color: '#ffffff',
		'& .MuiTabs-indicator': {
			backgroundColor: '#32ad65'
		},
		'& .MuiTab-root': {
			minWidth: '203px',
		}
	},
	iconDiv: {
		display:'flex',
		marginRight: '20px',
	}
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

export default function Footer() {
	const classes = styles();
	const [value, setValue] = useState('1');
	const [data, setData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 	useEffect(() => {
    async function loadData() {
      const res = await api.get('/tv-shows/SHOW123.json');
      setData(res.data);
    }
    loadData();
  }, [])

	return (
		<div className={classes.main}>
			<Paper className={classes.root}>
	      <Tabs value={value} onChange={handleChange}>
	        <Tab value="1" label="GERAl" />
	        <Tab value="2" label="ELENCO" />
	        <Tab value="3" label="PRINCIPAIS PRÊMIOS" />
	      </Tabs>
        <div className={classes.iconDiv}>
        	<img src={Logo} alt="logo"/>
        </div>
	    </Paper>
	    <TabPanel value={value} index="1">
	    	<Geral synopsis={data.Synopsis} />
	    </TabPanel>
	    <TabPanel value={value} index="2">
	    	<Elenco />
	    </TabPanel>
	    <TabPanel value={value} index="3">
	    	<Premios />
	    </TabPanel>
    </div>
	)
}