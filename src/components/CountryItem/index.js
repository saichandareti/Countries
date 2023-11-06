import './index.css'

const CountryItem = props => {
  const {ok} = props
  return (
    <li className="list-item">
      <p className="paragraph">India</p>
      <button type="button" className="visit-button">
        Visit
      </button>
    </li>
  )
}

export default CountryItem
