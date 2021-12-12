import styled from 'styled-components';

export const OffersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  list-style: none;
`;

export const ReputationBarFullRow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ReputationBar = styled.div`
  position: relative;

  img {
    display: block;
    margin: 0 auto;
  }

  ${ReputationBarFullRow} {
    width: ${({barWidth}) => `${barWidth}%`};
    height: 15px;
    object-fit: cover;
    object-position: 0;
  }
`;

export const ReputationContainer = styled.div`
  p {
    margin-bottom: 10px;
    text-align: center;
  }
`;
