import Hero from 'src/components/Hero/Hero';
import Container from 'src/components/Container/Container';
import Meta from 'src/components/meta';

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}
