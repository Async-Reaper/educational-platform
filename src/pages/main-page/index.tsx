// import { Icon } from 'shared/libs/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Toggle } from 'shared/ui';
import { LangSwitcher } from 'widgets';

function Component() {
  const { t } = useTranslation('main');
  const [s, f] = useState(false);
  return (
     <div>
        <LangSwitcher />
        {t('Главная страница')}
        <Toggle isActive={s} handler={() => f(!s)} />
     </div>
  );
}

export default Component;
