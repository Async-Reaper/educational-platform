import { BlackBG, BlackGradient } from 'shared/ui';
import { Header } from 'pages/MainPage/ui/Header';
import { TopSection } from 'pages/MainPage/ui/TopSection';
import { LessonsSection } from 'pages/MainPage/ui/LessonsSection';
import { TestSection } from 'pages/MainPage/ui/TestSection';
import { CoursesSection } from 'pages/MainPage/ui/CoursesSection';
import { QuestionsSection } from 'pages/MainPage/ui/QuestionsSection';
import { UsedPlatformSection } from 'pages/MainPage/ui/UsedPlatformSection';
import { Footer } from 'pages/MainPage/ui/Footer';

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
