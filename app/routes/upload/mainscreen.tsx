import styles from "./mainscreen.module.css";

export default function MainScreen() {
  return (
    <div className={styles.mainScreen}>
      <img src="/side-bar-light.png" alt="Sidebar" className={styles.sidebarImage} />
      <div className={styles.greenBox}>
        <h1 className={styles.thumbnailTitle}>thumbnail</h1>
      </div>
    </div>
  );
}