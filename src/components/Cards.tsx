import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import main_card1 from '../static/main_card1.png';
import main_card2 from '../static/main_card2.png';
import main_card3 from '../static/main_card3.jpg';
import main_card4 from '../static/main_card4.jpg';

export const CardContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 75%;
    text-align: center;
    padding: 0px 15px 32px;

    h1 {
      font-size: 2rem;
      font-weight: 700;

      margin-bottom: 8px;
    }

    hr {
      border-top: 2px solid #b4b4b4;
      width: 95%;
      margin-top: 0.3rem;
      margin-bottom: 1rem;
    }
  }

  .cardList {
    display: flex;
    flex-wrap: wrap;

    color: #222;

    .cardWrapper {
      width: 100%;

      @media screen and (min-width: 768px){
        max-width: 25%;
      }

      img {
        max-width: 100%;
        border-radius: calc(0.25rem - 1px);
      }

      .cardTitle {
        color: #343638;
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      .cardBody {
        padding: 1.25rem;
      }

      .cardContent {
        font-size: 0.85rem;
        font-weight: 400;
        line-height: 1.5;
        word-wrap: break-word;
        margin-bottom: 1.2rem;
      }
    }

    button {
      font-size: 0.85rem;
      font-weight: 700;
      
      border-radius: 2rem;
      color: #6c757d;
      border: 1px solid #6c757d;
      background: transparent;
      padding: 0.375rem 0.75rem;

      cursor: pointer;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

      &:hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
      }
    }
  }
`;

export default function Cards() {
  const navigate = useNavigate();

  return (
    <CardContainer>
      <header className="title">
        <h1 className="col">TIMF BUSINESS</h1>
        <hr />
      </header>
      <article className="cardList row">
        <section className="cardWrapper col">
          <img src={main_card1} alt="thumbnail" />
          <section className="cardBody">
            <header className="cardTitle">
              <h4>새벽배송</h4>
            </header>
            <article className="cardContent">
              팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다. 배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.
            </article>
            <button onClick={() => navigate('/business/ts')}>
              더 알아보기
            </button>
          </section>
        </section>
        <section className="cardWrapper col">
          <img src={main_card2} alt="thumbnail" />
          <section className="cardBody">
            <header className="cardTitle">
              <h4>화물주선</h4>
            </header>
            <article className="cardContent">
              화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다. 팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
            </article>
            <button onClick={() => navigate('/business/lf')}>
              더 알아보기
            </button>
          </section>
        </section>
        <section className="cardWrapper col">
          <img src={main_card3} alt="thumbnail" />
          <section className="cardBody">
            <header className="cardTitle">
              <h4>풀필먼트</h4>
            </header>
            <article className="cardContent">
              풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.<br />각 화주사별 요구사항을 매뉴얼화해 관리합니다.
            </article>
            <button onClick={() => navigate('/business/fu')}>
              더 알아보기
            </button>
          </section>
        </section>
        <section className="cardWrapper col">
          <img src={main_card4} alt="thumbnail" />
          <section className="cardBody">
            <header className="cardTitle">
              <h4>그로서리</h4>
            </header>
            <article className="cardContent">
              급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다. 기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
            </article>
            <button onClick={() => navigate('/business/gr')}>
              더 알아보기
            </button>
          </section>
        </section>
      </article>
    </CardContainer>
  );
}