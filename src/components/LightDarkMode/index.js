import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeColor = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const innerContainerColor = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const heading = isDarkMode ? 'white' : 'black'

    return (
      <div className="bg-container">
        <div className={`container ${innerContainerColor}`}>
          <h1 className={heading}>Click to change mode</h1>
          <button className="button" type="button" onClick={this.changeColor}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
