import { FaPlay } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

function Track(props) {
	return (
		<div className='track'>
			<div className='track-number'>{props.num}</div>
			<div className='queue-cover'>
				<img src={`assets/images/cover ${props.num}.png`} alt='' />
				<FaPlay />
			</div>
			<div className='name'>
				<p className='song-name'>{props.name}</p>
				<p className='artist'>{props.artist}</p>
			</div>
			<div className='album-name'>{props.album}</div>
			<div className='love-track'>
				<FaHeart />
			</div>
			<div className='track-length'>{props.length}</div>
		</div>
	);
}

export default Track;
