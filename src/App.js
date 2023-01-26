import SideBar from './components/SideBar/SideBar';
import MainComponent from './components/MainComponent/MainComponent';
import './normal.css';
import './App.css';
import TrackList from './components/MainComponent/TrackList';

const clicked = true;

const App = () => {
	return (
		<>
			{/* <SideBar />
			<MainComponent /> */}
			<TrackList />
		</>
	);
};

export default App;
