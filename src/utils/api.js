// helpers
const fetchJson = url => fetch(url).then(res => res.json());
const first10 = arr => arr.slice(0, 10);

const BASE = 'https://hacker-news.firebaseio.com';

// Items Ids Endpoint https://hacker-news.firebaseio.com/v0/topstories.json
const getItems = () => {
  return fetchJson(`${BASE}/v0/topstories.json`).then(res => {
    return first10(res);
  });
};

// Item endpoint https://hacker-news.firebaseio.com/v0/item/8863.json
const getItem = id => {
  return fetchJson(`${BASE}/v0/item/${id}.json`);
};

export const api = {
  getItems,
  getItem
};
