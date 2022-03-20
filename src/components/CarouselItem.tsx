import styled from 'styled-components';

export const ItemContainer = styled.section`

  position: relative;  

  img {
    width: 100%;
    height: 100%;
  }

  .carouselCaption {
    width: 100%;
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    top: 50%;
    transform: translateY(-50%);
  }

  h1 {
    color: #fff;
    font-size: 200%;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #fff;
    opacity: 0.8;
    font-size: 300%;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 120%;
    }

    h3 {
      font-size: 160%;
    }
  }

  @media (max-width: 576px){
    height: 20rem;  

    h1 {
      font-size: 110%;
    }

    h3 {
      font-size: 140%;
    }
  }
`;

type Props = {
  item: {
    id: number,
    kicker: string,
    title: string,
    image: string,
  }
};

export default function CarouselItem({ item }: Props) {
  return (
    // <ItemContainer key={item.id} style={{ "width": "100%", "height": "0", "paddingTop": "66.64%", "background": `url(${item.image})`, "backgroundRepeat": "no-repeat", "backgroundSize": "100%" }}>
    //   <h1>{item.kicker}</h1>
    //   <h3>{item.title}</h3>
    // </ItemContainer> 
    <ItemContainer key={item.id} style={{ "width": "100%" }}>
      <img src={item.image} />
      <div className="carouselCaption">
        <h1>{item.kicker}</h1>
        <h3>{item.title}</h3>
      </div>
    </ItemContainer> 
  );
}