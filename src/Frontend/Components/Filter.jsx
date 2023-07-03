import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useContext } from 'react';
import { PostContext } from '../Context/PostsContext';

export function Filter(){

	const {sortTrending,getUserData}=useContext(PostContext)

	return(
		<div className="aside-filter">
			<button onClick={sortTrending}>Trending</button>
			<button onClick={getUserData}>Latest</button>
		</div>	
	)
}