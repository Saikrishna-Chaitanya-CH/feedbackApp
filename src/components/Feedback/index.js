import {Component} from 'react'
import EmojiItems from '../EmojiItems'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onclickBtn = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        {isClicked ? (
          <div className="content-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <EmojiItems
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  changeDesign={this.onclickBtn}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="content-container">
            <img
              src={loveEmojiUrl}
              className="love-emoji-size"
              alt="love emoji"
            />
            <h1 className="heading">Thank You!</h1>
            <p className="love-paragraph">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
