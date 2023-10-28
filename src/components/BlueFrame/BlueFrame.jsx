import classes from 'src/components/BlueFrame/BlueFrame.module.css'
import Container from 'src/components/Container/Container'
import Link from 'next/link'

export default function BlueFrame({ children }) {
  return (
    <div className={classes.frame}>
      <Container>{children}</Container>

      <Link href="/blog" className={classes.sideBtn}>
        Recent Blog Posts
      </Link>
    </div>
  )
}
