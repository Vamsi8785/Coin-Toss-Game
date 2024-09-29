import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, isTails: false}

  getCoinToss = () => {
    const {headsCount, tailsCount, isTails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0
    let headsResultCount = headsCount
    let tailsResultCount = tailsCount
    let CoinStatus = isTails
    if (isHeads) {
      headsResultCount = headsCount + 1
      CoinStatus = false
    } else {
      tailsResultCount = tailsCount + 1
      CoinStatus = true
    }

    this.setState({
      headsCount: headsResultCount,
      tailsCount: tailsResultCount,
      isTails: CoinStatus,
    })
  }

  render() {
    const {headsCount, tailsCount, isTails} = this.state

    return (
      <>
        <div className="coin-toss-game-app">
          <div className="coin-toss-card">
            <h1 className="game-heading">Coin Toss Game</h1>
            <p className="game-role-text">Heads (or) Tails</p>
            <img
              className="toss-coin-img"
              src={
                isTails
                  ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
              }
              alt="toss result"
            />
            <button
              type="button"
              className="toss-button"
              onClick={this.getCoinToss}
            >
              Toss Coin
            </button>
            <div className="toss-result-container">
              <p className="toss-result">Total: {tailsCount + headsCount}</p>
              <p className="toss-result">Heads: {headsCount}</p>
              <p className="toss-result">Tails: {tailsCount}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CoinToss
