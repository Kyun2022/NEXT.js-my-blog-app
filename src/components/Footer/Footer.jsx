import Logo from 'src/components/Logo/Logo';
import Social from 'src/components/Social/Social';
import classes from 'src/components/Footer/Footer.module.css';
import Container from 'src/components/Container/Container';

export default function Footer() {
  return (
    <footer className={classes.wrapper}>
      <Container>
        <div className={classes.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
