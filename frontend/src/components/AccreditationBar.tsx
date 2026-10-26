import React from "react";
import styles from "./AccreditationBar.module.css";

export default function AccreditationBar() {
  const publications = [
    { name: "VOGUE", label: "Best Colorist NYC" },
    { name: "HARPER'S BAZAAR", label: "Top Luxury Atelier" },
    { name: "ELLE", label: "Beauty Excellence Award" },
    { name: "ALLURE", label: "Best Scalp Spa" },
    { name: "VANITY FAIR", label: "Editorial Choice" },
  ];

  return (
    <div className={styles.barWrapper}>
      <div className={`container ${styles.barContent}`}>
        <div className={styles.pressLogos}>
          {publications.map((pub) => (
            <div key={pub.name} className={styles.pressLogo} title={pub.label}>
              {pub.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
