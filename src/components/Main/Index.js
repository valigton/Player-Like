import React, { useEffect, useState } from 'react';
import { IconButton, Grid } from '@material-ui/core';

import './Main.scss'

import List from '../List/index.js'
import api from '../../services/api.js'

import close from '../../assets/close-search-w.svg';

export default function Main() {

const [data, setData] = useState({});
const [image, setImage]= useState("");
  
  useEffect(() => {
    async function loadData() {
      const res = await api.get('/tv-shows/SHOW123.json');
      setData(res.data);
      setImage(res.data.Images.Background);
    }
    loadData()
  }, [])

  return (
    <Grid container className={'main'} style={{backgroundImage:` url(${image})`}}>
      <Grid item md={12} lg={12} xl={12} className={'content'}>
        <div className={'top'}>
	  <div className={'title'}>
	    <h1>{data.Title}</h1>
	      <p className={'subtitle'}>80% Indicado / Terror / {data.Year} / EUA / 18</p>
	  </div>
	  <div>
	    <IconButton><img src={close} alt="button-close"/></IconButton>
	  </div>
	  </div>
	  <Grid container spacing={8} md={12} lg={12} xl={12} >
	    <Grid item md={7} lg={7} xl={7} ></Grid>
	    <Grid item md={5} lg={5} xl={5} >
	    <List />
	  </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
