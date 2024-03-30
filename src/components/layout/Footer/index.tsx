import styles from './index.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer>
      <button onClick={scrollToTop} className={styles.footerDiv}>
        <img alt="chevron-up" src="/svgs/chevron-up.svg"></img>
        <p>TOP</p>
      </button>
    </footer>
  );
};
export default Footer;
