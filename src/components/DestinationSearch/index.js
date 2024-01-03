// Write your code here
import {Componennt} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Componennt {
  state = {
    searchInput: '',
  }

  render() {
    const {searchInput}=this.state
    const {destinationsList} = this.props
    const searchresult=destinationsList.filter(eachdestination=>
    eachdestination.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" className="search-input" placeholder="Search" value={searchInput}
        onChange={this.onChangeSearchInput}/>
        <ul>
          {searchresult.map(each => (
            <DestinationItem key={each.id} list={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
