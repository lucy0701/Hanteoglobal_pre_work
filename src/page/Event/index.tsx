import { useState } from 'react';

import BannerSlider from 'components/BannerSlider';
import List from 'components/List';
import TabMenu from 'components/TabMenu';
import { CONTENT_WRAP } from 'constants/classNames';
import { LIST } from 'constants/constants';
import { TAB_MENU_EVENT } from 'constants/tabMenu';
import { bannerDatas_event } from 'testDatas';
import { Tab } from 'types/tab';

const Event: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TAB_MENU_EVENT[0]);

  return (
    <div className={CONTENT_WRAP}>
      <BannerSlider bannerDatas={bannerDatas_event} />
      <List key={selectedTab.name} title={`${selectedTab.name}`} url={selectedTab.apiUrl} listType={LIST}>
        <TabMenu tabMenuArray={TAB_MENU_EVENT} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </List>
    </div>
  );
};
export default Event;
