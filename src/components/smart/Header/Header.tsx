import React, { FunctionComponent } from 'react';
import './Header.scss';

import TextHalfBlack from '../../dumb/TextHalfBlack/TextHalfBlack';
import AvatarImage from '../../dumb/AvatarImage/AvatarImage';

interface Props {
  user: any;
}

const Header: FunctionComponent<Props> = ({ user }: any) => {
  const { firstName, profilePicture } = user;

  return (
    <section id="header">
      <div className="header__greetings">
        <TextHalfBlack firstName={firstName} />
      </div>
      <div className="header__user">
        <AvatarImage profilePicture={profilePicture} />
      </div>
    </section>
  );
};

export default Header;
