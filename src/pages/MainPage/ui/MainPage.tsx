import { BlackBG, BlackGradient } from 'shared/ui';
import { HeaderMainPage } from 'widgets/Header';
import { TopSection } from './TopSection/TopSection';
import { LessonsSection } from './LessonsSection/LessonsSection';
import { TestSection } from './TestSection/TestSection';
import { CoursesSection } from './CoursesSection/CoursesSection';
import { QuestionsSection } from './QuestionsSection/QuestionsSection';
import { UsedPlatformSection } from './UsedPlatformSection/UsedPlatformSection';
import { Footer } from './Footer/Footer';

function Component() {
  return (
     <div>
        <BlackBG>
           <HeaderMainPage />
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
