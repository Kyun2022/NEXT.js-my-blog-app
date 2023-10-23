import classes from 'src/components/PostBody/PostBody.module.css';

export default function PostBody({ children }) {
  return <div className={classes.stack}>{children}</div>;
}
