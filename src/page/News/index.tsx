import { useState } from 'react';

import Banners from 'components/Banners';
import TabMenu from 'components/TabMenu';
import { CONTENT_WRAP } from 'constants/classNames';
import { LIST } from 'constants/constants';
import { TAB_MENU_NEWS } from 'constants/tabMenu';
import List from 'layout/List';
import { bannerDatas_news } from 'testDatas';
import { Tab } from 'types/tab';

const News: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TAB_MENU_NEWS[0]);
  return (
    <div className={CONTENT_WRAP}>
      <Banners bannerDatas={bannerDatas_news} />
      <List key={selectedTab.name} url={selectedTab.apiUrl} listType={LIST}>
        <TabMenu tabMenuArray={TAB_MENU_NEWS} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </List>
    </div>
  );
};
export default News;
