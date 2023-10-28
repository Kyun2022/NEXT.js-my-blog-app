import classes from 'src/components/Hero/Hero.module.css'
import Image from 'next/legacy/image'
// import Cube from 'src/images/cube.jpg';

const Cube = {
  src: 'https://images.microcms-assets.io/assets/16c8c0b0b6b644f68bd9e168eb420c90/f5bccf7a90c14901ba3f6804f0a6698a/cube.jpg',
  height: 1300,
  width: 1500,
  blurDataURL: 'data:image/jpeg:base64',
}

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={classes.image}>
          <Image
            src={Cube}
            alt=""
            layout="responsive"
            sizes="(min-width:1152px) 576px, (min-width:768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
