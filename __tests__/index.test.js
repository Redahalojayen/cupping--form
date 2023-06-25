import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/pages/index';

describe('Home', () => {
  it('submits the form and displays success message', async () => {
    // Mock the fetch API
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: 'Success' }),
      })
    );
    global.fetch = mockFetch;

    // Render the component
    render(<Home />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText('Sample Name: اسم العينة'), {
      target: { value: 'Test Sample' },
    });
    fireEvent.change(screen.getByLabelText('Roast Level: درجة التحميص'), {
      target: { value: '8' },
    });
    fireEvent.change(
      screen.getByLabelText('Fragrance/Aroma: الرائحة'),
      {
        target: { value: '9' },
      }
    );
    fireEvent.change(screen.getByLabelText('Flavor: النكهة'), {
      target: { value: '9' },
    });
    fireEvent.change(
      screen.getByLabelText('After Taste: المذاق المتبقي'),
      {
        target: { value: '8' },
      }
    );
    fireEvent.change(screen.getByLabelText('Acidity: الحمضية'), {
      target: { value: '7' },
    });
    fireEvent.change(screen.getByLabelText('Body: القوام'), {
      target: { value: '7' },
    });
    fireEvent.change(screen.getByLabelText('Balance: التوازن'), {
      target: { value: '8' },
    });
    fireEvent.change(
      screen.getByLabelText('Uniformity: التماثل بين الأكواب'),
      {
        target: { value: '9' },
      }
    );
    fireEvent.change(
      screen.getByLabelText('Clean Cup: عدم وجود عنصر غريب'),
      {
        target: { value: '10' },
      }
    );
    fireEvent.change(screen.getByLabelText('Sweetness: الحلاوة'), {
      target: { value: '7' },
    });
    fireEvent.change(
      screen.getByLabelText('Overall: الإنطباع العام'),
      {
        target: { value: '8' },
      }
    );
    fireEvent.change(screen.getByLabelText('Notes: الإيحائات و الملاخظات'), {
      target: { value: 'Test notes' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Save'));

    // Wait for the fetch API to be called and resolve
    await Promise.resolve();

    // Check that the success message is displayed
    const mockAlert = jest.fn();
  window.alert = mockAlert;

  // Call the `sendAlert()` function

  // Check that `window.alert()` was called with the correct message
  expect(mockAlert).toHaveBeenCalled();
  });
});