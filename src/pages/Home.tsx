import styled from 'styled-components';

import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
import News from '../components/News';
import Footer from '../components/Footer';

export const Container = styled.section`
  .row {
    padding: 2rem;

    display: flex;
    flex-wrap: wrap;
  }

  .col {
    padding: 1rem;
  }

  h1 {
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const Jumbotron = styled.section`
  text-align: center;
  background-color: #172d4c;
  color: #fff;

  padding: 2rem;
  margin-bottom: 2rem;

  .jumbotronWrapper {
    padding: 70px 50px;

    .lead {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .leadContent {
      font-size: 1.2rem;
    }
  }
  
  
  @media screen and (max-width: 576px){
    background-color: #fff;
    color: #02204a;

    .jumbotronWrapper {
      padding: 0;
      
      .lead {
        font-size: 1.1rem;
      }

      .leadContent {
        font-size: 0.85rem;
        line-height: 1.5rem;
      }
    }
  }
`

export const Connect = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 2rem;

  h2 {
    margin-bottom: 0.5rem;

    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .connectBtn {
    padding-bottom: 2rem;

    @media (max-width: 576px){
      a {
        font-size: 2em;
        padding: 0.7rem;
      }
    }
      
    @media (max-width: 768px){
      a {
        font-size: 2.5em;
        padding: 1.2rem;
      }
    }

    @media (max-width: 992px){
      a {
        font-size: 4em;
        padding: 2rem;
      }
    }

    a {
      font-size: 4.5em;
      padding: 3rem;
    }

    .facebook {
      width: 0.875em;
      color: #3b5998;

      &:hover {
        color: #d5d5d5;
      }
    }

    .youtube {
      width: 1.125em;
      color: #bb0000;

      &:hover {
        color: #d5d5d5;
      }
    }
  }
`

export default function Home () {

  return (
    <Container>
      <Carousel />
      <Jumbotron>
        <div className="jumbotronWrapper">
          <p className="lead">대한민국 No.1 Cold-Chain Platform</p>
          <p className="leadContent">팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다.</p>
        </div>
      </Jumbotron>
      <Cards />
      <News />
      <Connect>
        <header className="col">
          <h2>Connect</h2>  
        </header>
        <section className="connectBtn col">
          <a href="https://www.facebook.com/teamfresh.timf">
            <svg className="fa facebook" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>
          </a>
          <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
            <svg className="fa youtube" aria-hidden="true" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
          </a>
        </section>
      </Connect>
      <Footer />
    </Container>
  );
}