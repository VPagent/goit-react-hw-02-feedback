

function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <ul>
    {options.map((key) =>
        <li key={key}>
            <button type="button" name={key} onClick={onLeaveFeedback}>
            {key}
            </button>
        </li>
    )}
    </ul>
  );
}

export default FeedbackOptions;
