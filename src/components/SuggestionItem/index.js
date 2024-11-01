// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, updateSearchInput} = props

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <button onClick={onClickSuggestion} className="btn" type="button">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
