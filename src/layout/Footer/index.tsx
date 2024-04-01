import styles from './index.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footerWrap}>
    <div className={styles.linkBox}>
      <a href="http://www.hanteoglobal.com/">Company Introduction</a>
      <a href="https://view.officeapps.live.com/op/view.aspx?src=https://resource.hanteochart.io/qna/%ED%95%9C%ED%84%B0%EC%B0%A8%ED%8A%B8_%EB%AC%B8%EC%9D%98%EC%8B%A0%EC%B2%AD%EC%84%9C.docx">
        Partnership
      </a>
    </div>
    <p>Copyright ⓒ HANTEO GLOBAL, Inc. All Rights Reserved</p>
  </footer>
);

export default Footer;
