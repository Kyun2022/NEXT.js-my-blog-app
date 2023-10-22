import Logo from 'src/components/Logo/Logo';
import Nav from 'src/components/Nav/Nav';
import classes from 'src/components/Header/Header.module.css';

export default function Header() {
  return (
    <header>
      <div className={classes.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
}
