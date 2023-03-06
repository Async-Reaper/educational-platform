import { Footer, Header, LessonsSection, QuestionsSection, TopSection, UsedPlatformSection, VerificationSection } from "widgets";
import { TestSection } from "widgets/test-section";
import { CoursesSection } from "widgets/courses-section";
import { BlackGradient } from "shared/ui";

function Component() {
  //   const { t } = useTranslation('main');
  return (
    <div>
      <Header />
      <TopSection />
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
