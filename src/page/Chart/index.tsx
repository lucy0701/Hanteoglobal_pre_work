import { useState } from 'react';

import BannerSlider from 'components/BannerSlider';
import List from 'components/List';
import TabMenu from 'components/TabMenu';
import { CONTENT_WRAP } from 'constants/classNames';
import { LIST } from 'constants/constants';
import { TAB_MENU_CHART } from 'constants/tabMenu';
import { bannerDatas_chart } from 'testDatas';
import { Tab } from 'types/tab';

const Chart: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(TAB_MENU_CHART[0]);

  return (
    <div className={CONTENT_WRAP}>
      <BannerSlider bannerDatas={bannerDatas_chart} />
      <List
        key={selectedTab.name}
        title={`${selectedTab.name}`}
        url={selectedTab.apiUrl}
        subtitles={selectedTab.subtitles}
        listType={LIST}
        chart={true}
      >
        <TabMenu tabMenuArray={TAB_MENU_CHART} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </List>
    </div>
  );
};
export default Chart;
