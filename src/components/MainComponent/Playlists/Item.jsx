import { useState } from 'react';

function Item(props) {
	const [closed, setClosed] = useState(true);

	function handleClick() {
		setClosed(false);
	}

	return (
		<div className='item' onClick={handleClick}>
			<img src={props.img} alt='' />
			<div className='play'>
				<span className='fa fa-play'></span>
			</div>
			<h4>{props.title}</h4>
			<p>{props.descr}</p>
		</div>
	);
}

export default Item;
