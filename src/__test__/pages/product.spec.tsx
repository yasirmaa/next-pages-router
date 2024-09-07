import ProductPage from '@/pages/product';
import { render } from '@testing-library/react';

describe('Product Page', () => {
  it('render product page', () => {
    const { container } = render(<ProductPage />);
    expect(container).toMatchSnapshot();
  });
});
