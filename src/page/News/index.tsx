import { useState } from 'react';

import BannerSlider from 'components/BannerSlider';
import List from 'components/List';
import TabMenu from 'components/TabMenu';
import { CONTENT_WRAP } from 'constants/classNames';
import { LIST } from 'constants/constants';
import { TAB_MENU_NEWS } from 'constants/tabMenu';
import { bannerDatas_news } from 'testDatas';
import { Tab } from 'types/tab';

const News: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TAB_MENU_NEWS[0]);
  return (
    <div className={CONTENT_WRAP}>
      <BannerSlider bannerDatas={bannerDatas_news} />
      <List key={selectedTab.name} url={selectedTab.apiUrl} listType={LIST}>
        <TabMenu tabMenuArray={TAB_MENU_NEWS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </List>
    </div>
  );
};
export default News;
