
import { nanoid } from "nanoid"
function Statistics ({good, bad, neutral, total, positivePercentage}) {
    return(
        <ul>
          <li key={nanoid(2)}>good{good}</li> 
          <li key={nanoid(2)}>bad{bad}</li>
          <li key={nanoid(2)}>neutral{neutral}</li>
          <li key={nanoid(2)}>total{total}</li>
          <li key={nanoid(2)}>positive feedback{positivePercentage}%</li>
        </ul> 
    )

}   

export default Statistics