import React, { useMemo, useState } from 'react';

import Wrapper from './index.style';

interface Props {
  text: string;
}

const NavTab: React.FC<Props> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false);

  const underScoreClass = useMemo(
    () => (isChecked ? 'underscore checked' : 'underscore'),
    [isChecked],
  );

  console.log(isChecked);

  return (
    <Wrapper onClick={() => setIsChecked((e) => !e)} >
      <div className="label">{text}</div>
      <div className={underScoreClass}/>
    </Wrapper>
  );
};

export default NavTab;
