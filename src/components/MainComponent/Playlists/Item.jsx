function Item(props) {
	return (
		<div className='item'>
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
