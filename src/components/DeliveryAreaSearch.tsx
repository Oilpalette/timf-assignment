import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import icon_back from '../static/icon_back.png';
import PostcodeModal from './PostcodeModal';
import ResultModal from './ResultModal';

export const ModalContainer = styled.div` 
  width: 100vw;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 900;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`

export const ModalView = styled.main`
  width: 420px;
  height: 100%;
  padding: 0 10px;

  border: 1px solid #ccc;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  button {
    border: 1px solid transparent;
    cursor: pointer;
  }

  .goBack {
    display: flex;
    justify-content: space-between;

    height: 50px;
    line-height: 50px;

    & > div {
      display: flex;
    }

    button {
      background-color: #fff;
      
      padding: 0.45rem 0.9rem;

      img {
        padding-top: 13px;
      }

      svg {
        margin-top: 15px;
      }
    }

    h4 {
      font-size: 1.125rem;
      font-weight: 700;
      color: #6c757d;

      margin: 9px 0;
    }
  }

  hr {
    height: 9px;
    border: 0px;
    background-color: #02204a;

    margin: 1rem 0;
  }

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .addressInput {
    margin: 10px 20px;

    input {
      height: 40px;
      border: 1px solid #02204a;
      padding-left: 10px;

      margin-bottom: 10px;

      &.zipCodeInput {
        width: 120px;
      }
    }
  }

  button.addressCheck {
    height: 40px;
    background-color: #02204a;
    color: #fff;
    border-radius: 10px;

    margin-top: 10px;
  }

  .footer {
    color: #98a6ad;
    background-color: #e5e8ef;
    font-size: 14px;

    margin: 20px;
    padding: 20px 10px;

    height: 100%;

    h4 {
      color: #ff0000;
      font-weight: 700;
      font-size: 16px;

      margin: 1rem 0;
    }

    p {
      margin-bottom: 1rem;
      padding-bottom: 1.5rem;

      border-bottom: 1px solid #02204a;
    }

    ul {
      margin: 1rem 0;

      &>li {
        list-style: none;
      }
    }
  }
`

export default function DeliveryAreaSearch() {

  const [address, setAddress] = useState({
    zipCode: '',
    roadAddress: '',
    extraAddress: '',
  })

  const { zipCode, roadAddress, extraAddress } = address;

  const [isModalOpen, setIsModalOpen] = useState({
    postcodeModal: true,
    resultModal: false,
  });

  const [isAvailable, setIsAvailable] = useState(false);

  const handleModalChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.currentTarget.id;

    if(target === "goBack"){
      setIsModalOpen({ ...isModalOpen, postcodeModal: true });
    } else {
      setIsModalOpen({ ...isModalOpen, resultModal: false });
    }
  }

  const handleComplete = (zipCode: string, roadAddress: string) => {
    setAddress({
      ...address,
      zipCode,
      roadAddress
    });
    setIsModalOpen({ ...isModalOpen, postcodeModal: false });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, extraAddress: event.target.value });
  };

  const shippingAvailabilityCheck = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    fetch('https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "addrBasic": address.roadAddress
      })
    })
      .then((res: any) => {
        return res.json();
      })
      .then((data: any) => {
        if(data.result.delyverYn.toString() === "1"){
          setIsAvailable(true);
          setIsModalOpen({ ...isModalOpen, resultModal: true });
        } else {
          setIsAvailable(false);
          setIsModalOpen({ ...isModalOpen, resultModal: true });
        }
      })
      .catch(err => alert('조회중에 에러가 발생했습니다. 새로고침 후 다시 시도해주세요.'));
  }

  return (
    <ModalContainer>
      <ModalView>
        <header className="goBack">
          <div>
            <button id="goBack" onClick={(e) => handleModalChange(e)}><img src={icon_back} alt="backBtn" /></button>
            <h4>다시 주소 검색하기</h4>
          </div> 
          <button>
            <Link to="/">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <line x1="1" y1="15" x2="15" y2="1" stroke="#02204a" stroke-width="2"/>
                <line x1="1" y1="1" x2="15" y2="15" stroke="#02204a" stroke-width="2"/>
              </svg>
            </Link>
          </button>
        </header>
        <hr />
        <section className="addressInput">
          <input 
            type="text" 
            value={zipCode}
            className="zipCodeInput" 
            readOnly={true} 
          />
          <input 
            type="text" 
            value={roadAddress}
            readOnly={true} 
          />
          <input 
            type="text"
            value={extraAddress}
            onChange={handleInputChange}
            placeholder="나머지 주소를 입력해주세요." 
          />
          <button 
            className="addressCheck"
            onClick={shippingAvailabilityCheck}
          >
            주소입력
          </button>
        </section>
        <section className="footer">
          <header>
            <h4>새벽배송 지역 중 배송 불가 장소 안내</h4>
            <p>관공서/학교/병원/시장/공단/도서산간지역  </p>
          </header> 
          <section>
            <ul>
              <li>가락동농수산물도매시장</li>
              <li>가천대학교</li>
            </ul>
          </section>
        </section>
      </ModalView>
      {isModalOpen.postcodeModal? <PostcodeModal handleComplete={handleComplete} /> : null}
      {isModalOpen.resultModal? <ResultModal isAvailable={isAvailable} handleModalChange={handleModalChange} /> : null}
    </ModalContainer>
  );
}