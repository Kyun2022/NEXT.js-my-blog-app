import classes from 'src/components/Container/Container.module.css';

export default function Container({ children, large = false }) {
  return (
    <div className={large ? classes.large : classes.default}>{children}</div>
  );
}
