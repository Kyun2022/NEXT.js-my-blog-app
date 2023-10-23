import Link from 'next/link';
import classes from 'src/components/Nav/Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
