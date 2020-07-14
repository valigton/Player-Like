import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'

//icons
import Add from '../../../assets/add-gray-s.svg'
import Sad from '../../../assets/sad-gray-w.svg'
import Rec from '../../../assets/rec-gray-s.svg'
import Share from '../../../assets/share-gray-s.svg'

const styles = makeStyles(() => ({
	root: {
		display: 'flex',
		margin: '15px',
	},
	icons: {
		display: 'flex',
		alignItens: 'center',
		justifyContent: 'space-between',
	},
	icon: {
		margin: '0 15px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItens: 'center',
	},
	syn :{
		width: '45rem',
	}
}))

export default function Geral({ synopsis }) {
	const classes = styles();

	return ( 
		<div className={classes.root}>
			<div className={classes.icons}>
				<div className={classes.icon}>
					<IconButton>
						<img src={Add} alt="Icon Add"/>
					</IconButton>
					<p>Minha Lista</p>
				</div>
				<div className={classes.icon}>
					<IconButton>
						<img src={Sad} alt="Icon Rate"/>
					</IconButton>
					<p>Avaliar</p>
				</div>
				<div className={classes.icon}>
					<IconButton>
						<img src={Rec} alt="Icon Rec"/>
					</IconButton>
					<p>Gravar</p>
				</div>
				<div className={classes.icon}>
					<IconButton>
						<img src={Share} alt="Icon Share"/>
					</IconButton>
					<p>Compartilhar</p>
				</div>
			</div>
			<div className={classes.syn}>
				<h3>SINOPSE</h3>
				<p>{synopsis}</p>
			</div>
		</div>
	)
}