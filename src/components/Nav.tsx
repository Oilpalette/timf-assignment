import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../static/logo.png';

export const NavContainer = styled.nav`
  background-color: #f8f9fa;
  
  width: 100vw;
  height: 60px;
  padding: 0.8rem;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  button {
    cursor: pointer;

    &#logo{
      border: none;
      background-color: white;

      img {
        width: 110px;
        height: 20px;
        padding-left: 10px;
      }  
    }

    &.toggler {
      width: 52px;
      height: 36px;
      border: 1px solid transparent;
      border-color: rgba(0,0,0,0.1);
      padding: 0.25rem 0.75rem;

      background-color: transparent;
      border-radius: 0.25rem;

      .togglerBtn{
        color: rgba(0,0,0,.5);
      }
    }
  }

  @media (max-width: 992px){
    @keyframes dropdown {
      0% {
        height: 0px;
      }
      100% {
        height: 228px;
      }
    }

    .collapse {
      overflow: hidden;
      animation: dropdown 350ms ease;
    }
  }

  @media (min-width: 992px){
    button.toggler {
      display: none;
    }
  }

  ul {
    list-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export const Menu = styled.ul`

  display: flex;

  font-size: 0.9rem;
  line-height: 1.5;

  @media (max-width: 992px){
    background-color: #f8f9fa;
    padding: 20px;
    flex-direction: column;
    flex-basis: 100%;

    &.hide {
      display: none;
    }
  }

  .menu {
    position: relative;
    padding-right: 20px;

    & a {
      display: block;
      padding: 0.5rem;

      text-decoration: none;
      font-weight: 600;
      color: #606060;

      &:hover {
        color: #0d0d0d;
        font-weight: 700;
      }
    }
  }

  .submenu {
    display: none;

    position: static;
    padding: 0.25rem 1.5rem;
    min-width: 160px;
    top: 100%;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    z-index: 1;

    background-color: #f1f1f1;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 16px 0px;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: #16181b;
    text-align: left;
    list-style: none;

    @media (min-width: 992px){
      position: absolute;
    }

    & a {
      display: block;

      color: #000;
      font-size: 0.9rem;
      text-decoration: none;
      font-weight: 400;

      padding: 12px 16px;

      &:hover {
        background-color: #ddd;
        font-weight: bold;
      }
    }
  }

  .dropdown:hover > .submenu {
    display: block;
  }
`;

export default function Nav() {

  const [isToggleOn, setIsToggleOn] = useState(false); 

  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <NavContainer>
      <button id="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </button>
      <button className="toggler" onClick={toggleHandler}>
        <svg className="togglerBtn" viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
          <path stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22' />
        </svg>
      </button>
      <Menu className={isToggleOn? "collapse" : "hide"}>
        <li className="menu dropdown"><Link to="#">회사소개</Link>
          <ul className="submenu">
            <li><Link to="/timfInfo">회사소개</Link></li>
            <li><Link to="/partnerInfo">협력사 소개</Link></li>
            <li><Link to="/customerInfo">고객사 소개</Link></li>
            <li><Link to="/timfMap">오시는 길</Link></li>
          </ul>
        </li>
        <li className="menu dropdown"><Link to="#">사업소개</Link>
          <ul className="submenu">
            <li><Link to="/business/ts">새벽배송</Link></li>
            <li><Link to="/business/lf">화물주선</Link></li>
            <li><Link to="/business/fu">풀필먼트</Link></li>
            <li><Link to="/business/gr">그로서리</Link></li>
          </ul>
        </li>
        <li className="menu dropdown"><Link to="#">공지사항</Link>
          <ul className="submenu">
            <li><Link to="/noticeList">공지사항</Link></li>
            <li><Link to="/employmentList">인재채용</Link></li>
            <li><Link to="/serviceInfo">서비스소개</Link></li>
          </ul>
        </li>
        <li className="menu"><Link to="/pressRelease">보도자료</Link></li>
        <li className="menu"><Link to="/deliveryAreaSearch">배송지역검색</Link></li>
      </Menu> 
    </NavContainer>
  );
}