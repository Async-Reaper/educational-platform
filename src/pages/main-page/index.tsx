import {
  Footer, Header, LessonsSection, QuestionsSection, TopSection, UsedPlatformSection,
} from 'widgets';
import { TestSection } from 'widgets/test-section';
import { CoursesSection } from 'widgets/courses-section';
import { BlackBG, BlackGradient } from 'shared/ui';

function Component() {
  //   const { t } = useTranslation('main');
  return (
     <div>
        <BlackBG>
           <Header />
           <TopSection />
        </BlackBG>
        <LessonsSection />
        <TestSection />
        <CoursesSection />
        <BlackGradient>
           <QuestionsSection />
           <UsedPlatformSection />
           <Footer />
        </BlackGradient>
     </div>
  );
}

export default Component;
