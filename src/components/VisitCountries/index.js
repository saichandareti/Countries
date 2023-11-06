import './index.css'
import {Component} from 'react'
import CountryItem from '../CountryItem'

class VisitCountries extends Component {
  state = {}

  render() {
    return (
      <div className="bg-container">
        <div className="upper-container">
          <h1 className="main-heading">Countries</h1>
          <ul className="countries-list">OK</ul>
        </div>
        <div className="lower-container">
          <h1 className="main-heading">Visited Countries</h1>
        </div>
      </div>
    )
  }
}

export default VisitCountries
