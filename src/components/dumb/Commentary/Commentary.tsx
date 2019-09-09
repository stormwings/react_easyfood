import React, { FunctionComponent } from 'react';
import './Commentary.scss';

import AvatarImage from '../../dumb/AvatarImage/AvatarImage';
import TitlePanel from '../../smart/TitlePanel/TitlePanel';
import Score from '../../dumb/Score/Score';

interface Props {
  comment: any;
}

const Commentary: FunctionComponent<Props> = ({ comment }) => {
  const { profilePicture, userFirstName, score, date, commentary } = comment;

  return (
    <div className="commentary">
      <div className="header">
        <div className="container">
          <AvatarImage profilePicture={profilePicture} size={'medium'} />
          <div className="header__user">
            <TitlePanel title={userFirstName} fontSize={'size-xs'} />
            <Score numberScore={score} />
          </div>
        </div>
        <div className="header__date">{date}</div>
      </div>
      <div className="description">
        <p className="description__text">{commentary}</p>
      </div>
    </div>
  );
};

export default Commentary;
