import { Route, Routes } from 'react-router-dom';

import { PATHS } from 'constants/paths';
import Charge from 'page/Charge';
import Chart from 'page/Chart';
import Event from 'page/Event';
import News from 'page/News';
import Store from 'page/Store';
import Template from 'page/Template';
import Whook from 'page/Whook';

export default function Router() {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path={PATHS.chart} element={<Chart />} />
        <Route path={PATHS.whook} element={<Whook />} />
        <Route path={PATHS.event} element={<Event />} />
        <Route path={PATHS.news} element={<News />} />
        <Route path={PATHS.store} element={<Store />} />
        <Route path={PATHS.charge} element={<Charge />} />
      </Route>
    </Routes>
  );
}
