import { Link } from 'react-router-dom';
import styled from 'styled-components';

import dummyNotice from '../static/notice';
import plus from '../static/icon_plus.png';
import clock from '../static/icon_clock.png';

export const NewsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0 15px;

  border-top: 1px solid rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.1);

  article.col {
    width: 100%;

    @media screen and (min-width: 768px){
      max-width: 50%;
    }

    h2 {
      margin-bottom: 2rem;
      margin-left: 0.5rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
`;

export const Board = styled.section`
  color: #222;
  background-color: #fafafa;
  border: 1px solid #eee;

  padding: 2rem;
  padding-bottom: 0.5rem;

  position: relative;

  header {
    display: flex;

    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #d5d5d5;

    h5 {
      font-size: 1.25rem;
      font-weight: 500;

      margin-right: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #222;
  }

  img {
    width: 16px;
    height: 16px;
  }

  .noticeContent {
    display: flex;
    justify-content: space-between;

    height: 1.2em;
    margin-bottom: 1.5rem;

    font-size: 1.0rem;
    font-weight: 500;
    line-height: 1.2;

    white-space: normal;

    .title:hover {
      text-decoration: underline;
    }

    img {
      width: 1rem;
      margin-right: 0.5rem;
    }
  }

  .createdAt {
    position: absolute;
    right: 2rem;
  }
`;

export default function News() {

  type News = {
    id: number,
    category: string,
    title: string,
    content: string,
    createdAt: Date
  };

  const noticeList = dummyNotice.slice(-3);
  const newsList: Array<News> = [];

  const formatDate = (timestamp: Date) => {
    const year = timestamp.getFullYear();
    const month = timestamp.getMonth() + 1;
    const date = timestamp.getDate();

    return year + "-" + (month > 9 ? "" : "0") + month + "-" + (date > 9 ? "" : "0") + date;
  };

  return (
    <NewsContainer className="row">
      <article className="col">
        <header>
          <h2>공지사항</h2>
        </header>
        <Board>
          <header>
            <h5>Notice</h5> <Link to="/noticeList"><img src={plus} alt="morePosts" /></Link>
          </header>
          {noticeList.map((notice) => {
            return (
              <Link to="/noticeDetail" key={notice.id}>
                <section className="noticeContent">
                  <div className="title">
                    [{notice.category}] {notice.title}
                  </div>
                  <div className="createdAt">
                    <img src={clock} alt="clock" />
                    {formatDate(notice.createdAt)}
                  </div>
                </section>
              </Link>
            )
          })}
        </Board>
      </article>
      <article className="col">
        <header>
          <h2>보도자료</h2>
        </header>
        <Board>
          <header>
            <h5>TimF News</h5> <Link to="/pressReleaseList"><img src={plus} alt="morePosts" /></Link>
          </header>
          {newsList.map((news) => {
            return (
              <Link to="/newsDetail" key={news.id}>
                <section className="noticeContent">
                  <div className="title">
                    [{news.category}] {news.title}
                  </div>
                  <div className="createdAt">
                    <img src={clock} alt="clock" />
                    {formatDate(news.createdAt)}
                  </div>
                </section>
              </Link>
            )
          })}
        </Board>
      </article>
    </NewsContainer>
  );
}