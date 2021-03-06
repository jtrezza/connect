import React from 'react';
import { css } from 'astroturf';

const cn = css`
  .container {
    display: flex;
    justify-content: center;
  }
  .content {
    width: 24rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <div className={cn.container}>
      <div className={cn.content}>{children}</div>
    </div>
  );
};

export default index;
