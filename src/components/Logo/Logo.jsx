import Link from 'next/link';
import classes from 'src/components/Logo/Logo.module.css';

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/" className={boxOn ? classes.box : classes.basic}>
      CUBE
    </Link>
  );
}
