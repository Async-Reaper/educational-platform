import React from 'react';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.player}>
      <iframe
         src='https://www.youtube.com/embed/YH01ldFrVRo'
         title='YouTube video player'
         frameBorder='0'
         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
         allowFullScreen
      />
   </div>
);

export const Player = React.memo(Component);
