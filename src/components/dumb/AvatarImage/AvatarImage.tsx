import React, { FunctionComponent } from 'react';
import './AvatarImage.scss';

interface Props {
  profilePicture: string;
  size?: string;
}

const AvatarImage: FunctionComponent<Props> = ({ profilePicture, size }) => {
  const avatarSize = `${size ? `image-${size}` : 'image-small'}`;
  const className = avatarSize;

  return <img id="avatar-image" className={className} src={profilePicture} alt="avatar" />;
};

export default AvatarImage;
