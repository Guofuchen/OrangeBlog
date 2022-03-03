import React from 'react';

import Wrapper from './index.style';

import Bg from '@assets/bg_1.jpg';

import NavTab from '@/components/NavTab';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <img className="img" src={Bg} alt="顶部导航栏背景" />

      <NavTab text="导航一" />
      <NavTab text="导航二" />
      <NavTab text="导航三" />

    </Wrapper>
  );
};

export default Header;
