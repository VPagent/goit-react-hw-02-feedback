import FeedbackOptions from 'components/FeedbackOptions';
import { useState } from 'react';
import Statisticks from 'components/Statisticks';
import Notification from 'components/Notification';
import Section from 'components/Section';

export function App() {
  const [{ good, neutral, bad }, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function onBtnClick(event) {
    const name = event.target.name;
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  }

  let totalValue = good + neutral + bad;
  let totalPercent = ((good / totalValue) * 100).toFixed(1);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={onBtnClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalValue ? (
          <Statisticks
            good={good}
            bad={bad}
            neutral={neutral}
            total={totalValue}
            positivePercentage={totalPercent}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
