import './styles/index.scss';
import { classNames } from 'shared/libs/helpers/classNames';
import { AppRouter, MainLayout } from 'app/providers';
import { Suspense } from 'react';

import { t } from 'i18next';
import { Typography } from 'shared/ui';

function App() {
  return (
     <div className={classNames('', ['theme'], { hovered: false })}>
        <Suspense fallback={<>Loading ...</>}>
           <MainLayout>
              <AppRouter />
              <Typography color='violet-primary' variant='small'>
                 {t('str')}
              </Typography>
           </MainLayout>
        </Suspense>
     </div>
  );
}

export default App;
