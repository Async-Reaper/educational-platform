// import { Icon } from 'shared/libs/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'shared/ui';
import { LangSwitcher } from 'widgets';

function Component() {
  const { t } = useTranslation('main');
  const [s, f] = useState(false);
  return (
     <div>
        <LangSwitcher />
        {t('Главная страница')}
        <Button variant='xs' border>
           <Typography variant='small'>Регистрация</Typography>
        </Button>
     </div>
  );
}

export default Component;
