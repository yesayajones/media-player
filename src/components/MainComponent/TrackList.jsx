import Track from './Track';

function TrackList() {
	return (
		<section className='playlist active'>
			<img src='assets/images/back.png' className='back-btn icon' alt='' />

			<h1 className='title'>playlist</h1>

			<div className='queue active'>
				<Track
					num={1}
					name='Cool'
					artist='Dua Lipas'
					album='Future Nostalgia'
					length='3:30'
				/>
				<Track />
				<Track />
				<Track />
				<Track />
				<Track />
				<Track />
				<Track />
			</div>
		</section>
	);
}

export default TrackList;
