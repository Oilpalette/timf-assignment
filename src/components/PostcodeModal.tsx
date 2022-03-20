import { useEffect } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div` 
  width: 100vw;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 1000;
`

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`

export const ModalView = styled.main`
  width: 100vw;
  height: 100vh;

  border: 1px solid #ccc;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  #addressSearch {
   width: 100%;
   height: 100%;
   overflow: hidden;
  }
`

declare const daum: any;

type Props = {
  handleComplete: Function,
};

export default function PostcodeModal({ handleComplete }: Props) {

  useEffect(() => {
    const searchSection = document.getElementById('addressSearch');
    const post = new daum.Postcode({
      oncomplete: (data: {[key: string]: string}) => {
        handleComplete(data.zonecode, data.address)
      },
      onresize : null, width: '100%', height: '100%'
    })
    
    post.embed(searchSection);
  }, []);

  return (
    <ModalContainer>
      <ModalBackdrop>
        <ModalView>
          <section id="addressSearch">
          </section>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}