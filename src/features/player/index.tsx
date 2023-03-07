import React from 'react';
import cls from './styles.module.scss';

const Component = () => (
   <div className={cls.player}>
      <div className={cls.center}>
         <iframe
           width='688'
           height='420'
           src='https://www.youtube.com/embed/R3xmwaZgrJ8'
           title='YouTube video player'
           frameBorder='0'
           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
           allowFullScreen
         />
      </div>
   </div>
);

export const Player = React.memo(Component);
