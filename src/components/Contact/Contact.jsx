import Social from 'src/components/Social/Social';
import classes from 'src/components/Contact/Contact.module.css';

export default function Contact() {
  return (
    <div className={classes.stack}>
      <h3 className={classes.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.address</address>
    </div>
  );
}
