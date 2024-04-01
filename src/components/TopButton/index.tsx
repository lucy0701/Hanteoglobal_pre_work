import styles from './index.module.css';

const TopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button onClick={scrollToTop} className={styles.topBtn}>
      <img alt="chevron-up" src="/svgs/chevron-up.svg"></img>
      <p>TOP</p>
    </button>
  );
};
export default TopButton;
