import background1 from '../static/background1.png';
import background2 from '../static/background2.png';
import background3 from '../static/background3.png';

type Item = {
    id: number,
    kicker: string,
    title: string,
    image: string,
};
  
const carouselItems: Array<Item> = [
  {
    "id": 0,
    "kicker": "대한민국 NO.1",
    "title": "Cold Chain Platform",
    "image": background1,
  }, {
    "id": 1,
    "kicker": "TIMF",
    "title": "Connect Freshness",
    "image": background2,
  }, {
    "id": 2,
    "kicker": "COMMERCE TREND",
    "title": "신선식품 물류를 선도하는 시스템 구축",
    "image": background3,
  }
];
  
export default carouselItems;