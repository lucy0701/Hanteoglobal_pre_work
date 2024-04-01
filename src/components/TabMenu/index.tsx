import cx from 'classnames';
import { Dispatch, SetStateAction } from 'react';

import { FLEX_AROUND } from 'constants/classNames';
import { Tab } from 'types/tab';

import styles from './index.module.css';

interface Props {
  tabMenuArray: Tab[];
  selectedTab: Tab;
  setSelectedTab: Dispatch<SetStateAction<Tab>>;
}

const TabMenu: React.FC<Props> = ({ tabMenuArray, selectedTab, setSelectedTab }) => (
  <div className={styles.wrap}>
    <div className={cx(FLEX_AROUND, styles.setBtnBox)}>
      {tabMenuArray.map((tab) => (
        <div key={tab.name} className={cx({ [styles.selected]: tab === selectedTab })}>
          <button onClick={() => setSelectedTab(tab)} className={styles.setBtn}>
            {tab.name}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default TabMenu;
