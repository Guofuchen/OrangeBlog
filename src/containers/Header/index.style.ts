import styled from 'styled-components';

export default styled.div`
  height: 24vh;
  width: 100vw;

  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  .img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    z-index: -1;
    object-fit: contain;
  }
`;
