
import { useContext, useEffect} from 'react'
import {Filter} from '../Components/Filter'
import { Suggestions } from '../Components/Sugsestion'
import { FollowerContext } from '../..'
export function Aside(){

	const {allSuggestions}=useContext(FollowerContext)

	return (
		<div className="aside">
			<div className="filter-content">
				<header>Who to follow?</header>
				{
					allSuggestions.map(item=>(
						<Suggestions key={item._id} suggested_user={item}/>
					))
				}
				
			</div>
		</div>	
	) 
}