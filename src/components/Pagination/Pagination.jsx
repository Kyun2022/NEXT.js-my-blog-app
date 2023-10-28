import classes from 'src/components/Pagination/Pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Pagination({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = '',
}) {
  return (
    <ul className={classes.flexContainer}>
      {prevText && prevUrl && (
        <li className={classes.prev}>
          <Link href={prevUrl} className={classes.iconText}>
            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={classes.next}>
          <Link href={nextUrl} className={classes.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
          </Link>
        </li>
      )}
    </ul>
  )
}
