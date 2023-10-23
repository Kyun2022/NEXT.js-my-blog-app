import Logo from 'src/components/Logo/Logo';
import Nav from 'src/components/Nav/Nav';
import classes from 'src/components/Header/Header.module.css';
import Container from 'src/components/Container/Container';

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={classes.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
