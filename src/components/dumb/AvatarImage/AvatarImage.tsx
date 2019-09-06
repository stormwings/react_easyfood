import React, { FunctionComponent } from 'react';
import './AvatarImage.scss';

interface Props {
  profilePicture: string;
}

const AvatarImage: FunctionComponent<Props> = ({ profilePicture }) => {
  return <img id="avatar-image" src={profilePicture} alt="avatar" />;
};

export default AvatarImage;
