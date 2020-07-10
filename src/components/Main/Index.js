import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';

import List from '../List/index.js'

import './Main.scss'
import api from '../../services/api.js'
import subtitle from '../../assets/cienc.svg';
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
    loadData();
  }, [])

  return ( 
    <div className={'main'} style={{backgroundImage:` url(${image})`}}>
    	<div className={'content-div'}>
    		<div className={'top-div'}>
    			<div className={'title-div'}>
						<h1>{data.Title}</h1>
						<img src={subtitle} alt="subtitle"/>
    			</div>
    			<div>
    				<IconButton><img src={close} alt="button-close"/></IconButton>
    			</div>
    		</div>
    		<div className={'wrapper'}>
    			<div></div>
    			<div className={'list-div'}>
    				<List />
    			</div>
    		</div>
    	</div>
    </div>
  );
}