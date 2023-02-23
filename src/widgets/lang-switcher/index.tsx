import React from 'react';
import { useTranslation } from 'react-i18next';

function Component() {
  const { i18n } = useTranslation('main');

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
     <div>
        <button onClick={changeLanguage}>Click Lang</button>
     </div>
  );
}

export const LangSwitcher = Component;
