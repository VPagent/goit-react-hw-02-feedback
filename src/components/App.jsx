import FeedbackOptions from "components/FeedbackOptions"
import { Component } from "react"
import Statisticks from "components/Statisticks"
import Notification from "components/Notification"
import Section from "components/Section"
import PropTypes from "prop-types"


export class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = event => {
    const name = event.target.name
    this.setState(prevState => ({[name]: prevState[name] + 1}))

  }
  countTotalFeedback = () => {
    let totalValue = this.state.good + this.state.neutral + this.state.bad
    return totalValue
  }
  countPositiveFeedbackPercentage = () => {
    let totalValue = this.state.good + this.state.neutral + this.state.bad
    let totalPercent = ((this.state.good/totalValue) * 100)
    return totalPercent.toFixed(1)
  }
  
  render(){
    const keys = Object.keys(this.state)
    let totalValue = this.state.good + this.state.neutral + this.state.bad
  
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={keys} onLeaveFeedback={this.onBtnClick}/>
      </Section>
      <Section title={"Statistics"}>
         {totalValue ?
          <Statisticks
           good={this.state.good}
           bad={this.state.bad}
           neutral={this.state.neutral}
           total={this.countTotalFeedback()}
           positivePercentage={this.countPositiveFeedbackPercentage()}/> :
           <Notification message={"There is no feedback"}/>
          }
      </Section>
    </div>
    )
  };
};
 App.propTypes ={
   state: PropTypes.shape({
     good: PropTypes.number,
     neutral: PropTypes.number,
     bad: PropTypes.number
   })
 }