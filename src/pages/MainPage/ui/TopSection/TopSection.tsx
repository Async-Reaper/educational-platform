import React from 'react';
import { Container, Image } from 'shared/ui';
import { ColoredIcon } from 'shared/libs/icons';
import { useResize } from 'shared/hooks/useResize/useResize';
import iMacWebp from '../../../../../public/images/common/iMac.webp';
import { LinkSection } from './LinkSection';
import { TopSectionContent } from './TopSectionContent';
import cls from './styles.module.scss';

const Component = () => {
  const widthScreen = useResize().width;

  return (
     <div className={cls.top_section__wrapper}>
        <Container>
           <div className={cls.top_section__body}>
              <TopSectionContent />
              <div className={cls.images__bg}>
                 <Image src={iMacWebp} name='iMac' />
              </div>
           </div>
           <LinkSection />
        </Container>
        <div className={cls.bottom__icon}>
           <ColoredIcon name='wave' width={widthScreen} height={731} />
        </div>
     </div>
  );
};

export const TopSection = React.memo(Component);
