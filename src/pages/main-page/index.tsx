import { Header, LessonsSection, TopSection } from 'widgets';
import { TestSection } from 'widgets/test-section';

function Component() {
//   const { t } = useTranslation('main');
  return (
     <div>
        <Header />
        <TopSection />
        <LessonsSection />
        <TestSection />
     </div>
  );
}

export default Component;
