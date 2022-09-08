import PropTypes from 'prop-types'
import s from 'components/FeedbackOptions/FeedbackOptions.module.css'

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <ul className={s.feedList}>
    {options.map((key) =>
        <li key={key}className={s.feedItem}>
            <button type="button" className={s.feedBtn} name={key} onClick={onLeaveFeedback}>
            {key}
            </button>
        </li>
    )}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func
}