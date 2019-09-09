import React from 'react';

const SvgHeart = (props: any) => (
  <svg width={props.sizeX ? props.sizeX : 24} height={props.sizeY ? props.sizeY : 24} {...props}>
    <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178l-4.721 2.525.942-5.27-3.861-3.71 5.305-.733L12 5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z" />
  </svg>
);

export default SvgHeart;
