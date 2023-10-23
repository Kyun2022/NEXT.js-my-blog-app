import classes from 'src/components/Hero/Hero.module.css';
import Image from 'next/legacy/image';
import Cube from 'src/images/cube.jpg';

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
  );
}
