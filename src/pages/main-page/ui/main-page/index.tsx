import {
  Footer, Header, LessonsSection, QuestionsSection, TopSection, UsedPlatformSection,
} from 'widgets';
import { TestSection } from 'widgets/test-section';
import { CoursesSection } from 'widgets/courses-section';
import { BlackBG, BlackGradient, Loader } from 'shared/ui';
import { Suspense } from 'react';

function Component() {
  //   const { t } = useTranslation('main');
  return (
     <Suspense fallback={<Loader />}>
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
     </Suspense>
  );
}

export default Component;
