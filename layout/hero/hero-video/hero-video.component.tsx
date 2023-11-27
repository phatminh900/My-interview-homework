import { memo } from "react";
import styles from "./hero-video.module.scss";
const HeroVideo = () => {
  return (
    <div className={styles.box}>
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/JPe2mwq96cw?autohide=1&rel=0&autoplay=1&playsinline=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&origin=https://my-interview-homework.vercel.app/"
        allow="autoplay; muted"
        allowFullScreen
        title="video"
      />
    </div>
  );
};
// use memo because state change on the parent might affect the iframe
export default memo(HeroVideo);
