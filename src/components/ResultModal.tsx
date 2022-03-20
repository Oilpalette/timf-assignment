import styled from 'styled-components';

import available from '../static/available.png';
import unavailable from '../static/unavailable.png';

export const ModalContainer = styled.div` 
  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 999;
`

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0,0,0,0.4);

  @keyframes fadeIn {
    0%{
      opacity: 0;
    }

    100% {
      opacity: .7;
    }
  }

  @keyframes slideIn {
    0%{
      transform: translateY(-50px);
    }
  }
`

export const ModalView = styled.main`
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.1411764705882353), 0 1px 14px 0 rgba(0,0,0,.12156862745098039);

  width: 300px;

  animation: fadeIn .15s linear, slideIn .3s ease-out;

  header {
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;

    h4 {
      margin: 10px 0;
      font-weight: 700;
      font-size: 1.125rem;
      color: #6c757d;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 1rem;

    h1 {
      margin: 10px 0;
      color: #404040;
      font-size: 22px;

      margin-bottom: 20px;
    }

    p {
      color: #606060;
      font-size: 15px;
      margin-bottom: 1rem;

      &.notice {
        color: #e22020;
        font-size: 14px;
      }
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 0.75rem;
    border-top: 1px solid #dee2e6;

    button {
      color: #fff;
      background-color: #0acf97;
      border: 1px solid #0acf97;
      border-radius: 0.15rem;
      box-shadow: 0 2px 6px 0 rgb(10,207,151,0.5);

      font-weight: 400;
      font-size: 0.9rem;

      margin: 0.25rem;
      padding: 0.45rem 0.9rem;

      cursor: pointer;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

      &:hover {
        background-color: #08ab7c;
        border-color: #089e74;
      }
    }
  }
`

type Props = {
  isAvailable: boolean,
  handleModalChange: Function
};

export default function ResultModal({ isAvailable, handleModalChange }: Props) {
  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView>
          <header>
            <h4>{isAvailable? '새벽배송가능' : '새벽배송불가능'}</h4>
          </header>
          <section className="body">
            <img src={isAvailable? available : unavailable} />
            <h1>{isAvailable? '새벽배송가능 지역입니다.' : '새벽배송불가 지역입니다.'}</h1>
            <section>
              {isAvailable? 
                <>
                  <p>다음날 아침 7시 이전에 도착합니다.</p>
                  <p className="notice">(관공서/학교/병원/시장/공단/도서산간지역 배송불가)</p>
                </>
              : <p>
                  지번주소(구 주소)로 검색하셨다면 <br /> 도로명 주소로 다시 시도해 주세요.
                </p>
              }
            </section>
          </section>
          <footer>
            <button onClick={(e) => handleModalChange(e)}>
              확인
            </button>  
          </footer>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}