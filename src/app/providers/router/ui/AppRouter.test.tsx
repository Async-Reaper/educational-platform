import { testingRender } from 'shared/config/testingConfig/testingConfig';
import { screen } from '@testing-library/react';

const mockedDataGroupedCourse = [
  {
    id: 2,
    name: 'Информационная безопасность',
    description: 'Описание курса',
    is_grouped: true,
  },
  {
    id: 3,
    name: 'Программирование',
    description: 'Программирование описание',
    is_grouped: true,
  },
  {
    id: 5,
    name: 'Русский язык',
    description: 'Русский язык',
    is_grouped: true,
  },
];

describe('App router', () => {
  test('Show main page', async () => {
    testingRender(null, { route: '/' });
    const mainPage = await screen.findByTestId('main-page');
    screen.debug();
    expect(mainPage).toBeInTheDocument();
  });

  test('Show platform page', async () => {
    testingRender(null, { route: '/platform' });
    const platformPage = await screen.findByTestId('platform-page');
    screen.debug();
    expect(platformPage).toBeInTheDocument();
  });

  test('Show private cabinet page', async () => {
    testingRender(null, { route: '/private-cabinet' });
    const privateCabinetPage = await screen.findByTestId('private-cabinet-page');
    screen.debug();
    expect(privateCabinetPage).toBeInTheDocument();
  });

  test('Show course grouped page', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockedDataGroupedCourse));
    testingRender(null, { route: '/course/grouped-course' });
    const courseGroupedPage = await screen.findByTestId('course-grouped-page');
    screen.debug();
    expect(courseGroupedPage).toBeInTheDocument();
  });

  test('Show course id page', async () => {
    testingRender(null, { route: '/course/1' });
    const courseIdPage = await screen.findByTestId('course-id-page');
    screen.debug();
    expect(courseIdPage).toBeInTheDocument();
  });

  test('Show topic id page', async () => {
    testingRender(null, { route: '/course/1/topic/1' });
    const topicIdPage = await screen.findByTestId('topic-id-page');
    screen.debug();
    expect(topicIdPage).toBeInTheDocument();
  });

  test('Show test page', async () => {
    testingRender(null, { route: '/test' });
    const testPage = await screen.findByTestId('test-page');
    screen.debug();
    expect(testPage).toBeInTheDocument();
  });
});
