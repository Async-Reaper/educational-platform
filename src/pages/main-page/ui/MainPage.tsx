import { BlackBG, BlackGradient } from 'shared/ui';
import { Header } from 'pages/main-page/ui/header';
import { TopSection } from 'pages/main-page/ui/top-section';
import { LessonsSection } from 'pages/main-page/ui/lessons-section';
import { TestSection } from 'pages/main-page/ui/test-section';
import { CoursesSection } from 'pages/main-page/ui/courses-section';
import { QuestionsSection } from 'pages/main-page/ui/questions-section';
import { UsedPlatformSection } from 'pages/main-page/ui/used-platform-section';
import { Footer } from 'pages/main-page/ui/footer';

function Component() {
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
