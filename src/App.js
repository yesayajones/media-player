import Home from './components/MainComponent/Home';
import './normal.css';
import './App.css';
import TrackList from './components/MainComponent/TrackList';

var closed = true;

const App = () => {
	return <>{closed ? <Home /> : <TrackList />}</>;
};

export default App;
