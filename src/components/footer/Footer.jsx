import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Date from "./Date";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div><Date></Date></div>
      <div className={styles.social}>
        <a href="http://" target="_blank" rel="noopener noreferrer"><Image src="/1.png" width={15} height={15} className={styles.icon} alt="shipon Facebook Account" /></a>
       <a href="http://" target="_blank" rel="noopener noreferrer"> <Image src="/2.png" width={15} height={15} className={styles.icon} alt="shipon Instagram Account" /></a>
       <a href="http://" target="_blank" rel="noopener noreferrer">  <Image src="/3.png" width={15} height={15} className={styles.icon} alt="shipon Twitter Account" /></a>
       <a href="http://" target="_blank" rel="noopener noreferrer"> <Image src="/4.png" width={15} height={15} className={styles.icon} alt="shipon Youtube Account" /></a>
      </div>
    </div>
  );
};

export default Footer;
