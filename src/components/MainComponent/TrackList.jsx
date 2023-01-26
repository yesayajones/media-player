import Track from './Track';
import songs from '../../data';

function createSong(song) {
	return (
		<Track
			num={song.num}
			name={song.name}
			artist={song.artist}
			cover={song.cover}
			album={song.album}
			length={song.length}
		/>
	);
}

function TrackList() {
	return (
		<section className='playlist active'>
			<img src='assets/images/back.png' className='back-btn icon' alt='' />

			<h1 className='title'>playlist</h1>

			<div className='queue active'>{songs.map(createSong)}</div>
		</section>
	);
}

export default TrackList;
