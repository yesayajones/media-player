import Item from './Item';
import plays from '../../../plays';

function createPlaylist(play) {
	return <Item img={play.img} title={play.title} descr={play.descr} />;
}

function List() {
	return <div className='list'>{plays.map(createPlaylist)}</div>;
}

export default List;
