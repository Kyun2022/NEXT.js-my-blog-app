import Meta from 'src/components/Meta'
import Container from 'src/components/Container/Container'
import Hero from 'src/components/Hero/Hero'

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />-
    </Container>
  )
}
