import { Route, Routes } from 'react-router-dom';

import Chart from 'page/Chart';
import Event from 'page/Event';
import Gratify from 'page/Gratify';
import News from 'page/News';
import Store from 'page/Store';
import Template from 'page/Template';
import Whook from 'page/Whook';

export default function Router() {
  return (
      <Routes>
        <Route element={<Template />}>
          <Route path="/" element={<Chart />} />
          <Route path="/whook" element={<Whook />} />
          <Route path="/event" element={<Event />} />
          <Route path="/news" element={<News />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gratify" element={<Gratify />} />
        </Route>
      </Routes>
  );
}
