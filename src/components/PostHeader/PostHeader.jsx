import classes from 'src/components/PostHeader/PostHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ConvertDate from 'src/components/ConvertDate'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function PostHeader({ title, subtitle, publish = '' }) {
  return (
    <div className={classes.stack}>
      <p className={classes.subtitle}>{subtitle}</p>
      <h1 className={classes.title}>{title}</h1>
      {publish && (
        <div className={classes.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
