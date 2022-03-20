type Notice = {
  id: number,
  category: string,
  title: string,
  content: string,
  createdAt: Date
};

const dummyNotice: Array<Notice> = [
  {
    "id": 1,
    "category": "공고",
    "title": "신주발행 공고(제3자 배정방식)",
    "content": "",
    "createdAt": new Date('09/08/2021'),
  }, {
    "id": 2,
    "category": "공고",
    "title": "신주발행 공고(제3자 배정방식)",
    "content": "",
    "createdAt": new Date('09/15/2021'),
  }, {
    "id": 3,
    "category": "공고",
    "title": "합병에 따른 채권자이의 및 주권제출공고",
    "content": "",
    "createdAt": new Date('02/28/2022'),
  }, {
    "id": 4,
    "category": "공고",
    "title": "신주발행 공고(제3자 배정방식)",
    "content": "",
    "createdAt": new Date('03/15/2022'), 
  }
];

export default dummyNotice;