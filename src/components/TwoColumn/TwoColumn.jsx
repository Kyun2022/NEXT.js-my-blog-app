import classes from 'src/components/TwoColumn/TwoColumn.module.css'

export function TwoColumn({ children }) {
  return <div className={classes.flexContainer}>{children}</div>
}

export function TwoColumnMain({ children }) {
  return <div className={classes.main}>{children}</div>
}

export function TwoColumnSidebar({ children }) {
  return <div className={classes.sidebar}>{children}</div>
}
