import React, { FunctionComponent } from 'react';
import './Score.scss';
import SvgFavorite from '../../Svg/SVGFavorite';

interface Props {
  numberScore: number;
  elementSize?: number;
}

const Score: FunctionComponent<Props> = ({ numberScore, elementSize }) => {
  const createScores = (numberScore: number, size: number = 12) => {
    let score: any = [];
    for (let i = 0; i < numberScore; i++) {
      score.push(<SvgFavorite className="score-element" sizex={size} sizey={size} key={i} />);
    }
    return score;
  };

  return <div id="score">{createScores(numberScore, elementSize)}</div>;
};

export default Score;
