import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const PageContainer = styled.main`
  padding: 20px 25px;

  width: 500px;

  header {
    font-size: 1.2rem;
    font-weight: bold;

    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #606060;
  }

  main {
    line-height: 160%;
    margin-bottom: 10px;
  }

  button#return {
    padding: 10px;

    border: 1px solid #606060;
    background-color: white;
    font-weight: bold;

    cursor: pointer;
  }
`;

export default function Subpage () {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <header>Contact</header>
      <main>
        <b>김아영</b>
        <br /> Front-end Developer
        <br /> <b>Mobile:</b> 010-4600-3635
        <br /> <b>Email:</b> debuneko12kg@gmail.com
      </main>
      <button id="return" onClick={() => navigate('../')}>return to home</button>
    </PageContainer>
  );
}