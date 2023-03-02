import { Header, LessonsSection, TopSection } from 'widgets';
import { TestSection } from 'widgets/test-section';
import { CoursesSection } from 'widgets/courses-section';

function Component() {
//   const { t } = useTranslation('main');
  return (
     <div>
        <Header />
        <TopSection />
        <LessonsSection />
        <TestSection />
        <CoursesSection />
     </div>
  );
}

export default Component;
