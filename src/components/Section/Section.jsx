import PropTypes from 'prop-types'

import s from 'components/Section/Section.module.css'

function Section ({title, children}){
    return(
        <section className={s.section}>
            {title}
            {children}
        </section>
    )
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}