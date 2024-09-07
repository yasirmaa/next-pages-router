import ProfilePage from '@/pages/profile';
import { render } from '@testing-library/react';

describe('Profile Page', () => {
  it('render profile page', () => {
    const page = render(<ProfilePage />);
    expect(page).toMatchSnapshot();
  });
  //   it('render profile page on mobile', () => {
  //     const page = render(<ProfilePage />);
  //     expect(page).toMatchSnapshot();
  //   });
});
