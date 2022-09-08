import PropTypes from 'prop-types'
import s from 'components/Statisticks/Statisticks.module.css'

import { nanoid } from "nanoid"
function Statistics ({good, bad, neutral, total, positivePercentage}) {
    return(
        <ul className={s.statList}>
          <li className={s.statItem} key={nanoid(2)}>good: {good}</li> 
          <li className={s.statItem} key={nanoid(2)}>bad:{bad}</li>
          <li className={s.statItem} key={nanoid(2)}>neutral:{neutral}</li>
          <li className={s.statItem} key={nanoid(2)}>total:{total}</li>
          <li className={s.statItem} key={nanoid(2)}>positive feedback:{positivePercentage}%</li>
        </ul> 
    )

}   

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
}