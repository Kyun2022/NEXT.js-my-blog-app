import Logo from 'src/components/Logo/Logo';
import classes from 'src/components/Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.flexContainer}>
        <Logo />
        [ソーシャル]
      </div>
    </footer>
  );
}
