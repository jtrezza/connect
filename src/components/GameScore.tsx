import React from 'react';
import { css } from 'astroturf';

const cn = css`
  .score {
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-width: 14rem;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  .label {
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }
  .value {
    font-size: 1.75rem;
  }
`;

interface Props {
  time: number;
  taps: number;
}

const formatTime = (time: number) => new Date(time).toISOString().substr(14, 8);

const GameScore = ({ time, taps }: Props) => {
  return (
    <div className={cn.score}>
      <div>
        <div className={cn.label} id="time">
          Time
        </div>
        <div className={cn.value}>{formatTime(time)}</div>
      </div>
      <div>
        <div className={cn.label}>Taps</div>
        <div className={cn.value}>{taps}</div>
      </div>
    </div>
  );
};

export default GameScore;
