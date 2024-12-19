import styles from "./Loader.module.css";

function Loader() {
  return (
      <div className={styles.loader}>
        <span>Loading...</span>
      </div>
  );
}

export default Loader;
