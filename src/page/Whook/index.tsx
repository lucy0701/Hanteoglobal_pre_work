import { useState } from 'react';

import TabMenu from 'components/TabMenu';
import { CONTENT_WRAP } from 'constants/classNames';
import { IMAGE_CARD } from 'constants/constants';
import { TAB_MENU_WHOOK } from 'constants/tabMenu';
import List from 'layout/List';
import { Tab } from 'types/tab';

const Whook: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TAB_MENU_WHOOK[0]);
  return (
    <div className={CONTENT_WRAP}>
      <List key={selectedTab.name} title={`${selectedTab.name}`} url={selectedTab.apiUrl} listType={IMAGE_CARD}>
        <TabMenu tabMenuArray={TAB_MENU_WHOOK} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </List>
    </div>
  );
};
export default Whook;
