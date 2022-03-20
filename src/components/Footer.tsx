import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background-color: #31353e;
  color: #d5d5d5;

  padding: 1rem;

  .colWrapper {
    .col {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      padding: 1rem;

      font-size: 0.85rem;

      header {
        width: 75%;

        border-top: 1px solid #d5d5d5;
        border-bottom: 1px solid #d5d5d5;
        margin-top: 0.8rem;
        margin-bottom: 1rem;

        padding: 0.8rem 0;
      }

      h5 {
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 1.2;
      }

      a {
        color: #d5d5d5;
        text-decoration: none;
        margin-bottom: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (min-width: 768px){

      display: flex;
      justify-content: space-between;
      
      .col {
        max-width: 33.333333%;
      }
    }
  }

  .copyright {
    border-top: 1px solid #d5d5d5;
    
    font-weight: 500;
    line-height: 1.2;

    margin: 0.8rem 0 0.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="colWrapper">
        <section className="col">
          <header>
            <h5>Timf</h5>
          </header>
          <p>상호명: (주)팀프레시</p>
          <p>사업자등록번호: 561-88-01138</p>
          <p>대표자: 이성일</p>
        </section>
        <section className="col">
          <header>
            <h5>Contact us</h5>
          </header>
          <p>Tel: 02-423-0525</p>
          <p>Fax: 02-3432-0525</p>
          <p>E-mail: info@timf.co.kr</p>
          <p>서울특별시 송파구 위례성대로 12길 15-1</p>
          <p>영업 및 제휴 문의:</p>
          <p>E-mail: sales@timf.co.kr</p>
        </section>
        <section className="col">
          <header>
            <h5>Others</h5>
          </header>
          <Link to="/employment">인재채용</Link>
          <Link to="/serviceInfo">서비스 소개</Link>
          <Link to="/userPolicy">개인정보 처리방침</Link>
          <Link to="/locationBasedService">위치기반 서비스 이용약관</Link>
        </section>
      </div>
      <section className="copyright col">
        <h5>© TeamFresh All right reserved</h5>
      </section>
    </FooterContainer>
  );
}