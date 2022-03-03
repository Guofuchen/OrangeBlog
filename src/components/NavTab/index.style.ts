import styled from 'styled-components';

export default styled.div`
  padding: 10px 20px;
  margin: 0 6px;
  cursor: pointer;

  color: #ffffff;
  
  position: relative;
  
  .label{
    font-size: 18px;
  }
  
  
  .underscore{
    display: none;
    
    position: absolute;
    bottom: 2px;
    left: 0;
    height: 2px;
    border-radius: 2px;
    
    background: #fff;
    
    &.checked{
      display: inline-block;
      animation: lengthen-left-right 0.6s ease-in-out both;
    }
    
  }

  
  @keyframes lengthen-left-right {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  
  &:hover{
    color: #cceedd ;
  }
`;
