import classes from 'src/components/Hero/Hero.module.css';

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.text}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.subtitle}>{subtitle}</p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
