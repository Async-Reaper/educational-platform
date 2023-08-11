import { testingRender } from 'shared/config/testingConfig/testingConfig';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from 'app/App';

describe('Test', () => {
  test('Test show app component', async () => {
    testingRender(<App />, { route: '/' });
    const app = await screen.findByTestId('app');
    screen.debug();
    expect(app).toBeInTheDocument();
  });
});
