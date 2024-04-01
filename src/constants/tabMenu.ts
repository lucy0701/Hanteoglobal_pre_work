import { CATS_API_URL, DOGS_API_URL } from './openAPIs';

export const TAB_MENU_CHART = [
  {
    name: 'Global',
    apiUrl: CATS_API_URL,
    subtitles: ['집계 기준 (KST) : 2024.03.25 ~ 2024.03.31', 'World index'],
  },
  {
    name: 'United States',
    apiUrl: DOGS_API_URL,
    subtitles: ['집계 기준 (KST) : 2024.03.18 ~ 2024.03.24', 'United States Score'],
  },
  {
    name: 'Japan',
    apiUrl: CATS_API_URL,
    subtitles: ['집계 기준 (KST) : 2024.03.18 ~ 2024.03.24', 'Japan Score'],
  },
  {
    name: 'China',
    apiUrl: DOGS_API_URL,
    subtitles: ['집계 기준 (KST) : 2024.03.18 ~ 2024.03.24', 'China Score'],
  },
];

export const TAB_MENU_EVENT = [
  {
    name: '진행 중인 이벤트',
    apiUrl: CATS_API_URL,
  },
  {
    name: '종료 된 이벤트',
    apiUrl: CATS_API_URL,
  },
];

export const TAB_MENU_NEWS = [
  {
    name: '최신 기사',
    apiUrl: CATS_API_URL,
  },
  {
    name: '많이 본 기사',
    apiUrl: DOGS_API_URL,
  },
];

export const TAB_MENU_WHOOK = [
  {
    name: 'TEST 01',
    apiUrl: CATS_API_URL,
  },
  {
    name: 'TEST 02',
    apiUrl: DOGS_API_URL,
  },
  {
    name: 'TEST 03',
    apiUrl: DOGS_API_URL,
  },
];
