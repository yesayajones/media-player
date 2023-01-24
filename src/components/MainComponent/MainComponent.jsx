import TopBar from './TopBar';
import Playlists from './Playlists/Paylists';
import Preview from './Preview';

function MainComponent() {
	return (
		<div className='main-container'>
			<TopBar />
			<Playlists />
			<Preview />
		</div>
	);
}

export default MainComponent;
