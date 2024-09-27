// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe(App, () => {
//   it('says Learn React' , () => {
//     const { getByTestId } = render(<App />);
//     const text = getByTestId('learn').textContent;
//     expect(text).toEqual('Learn React');
//   });
// });

// import { render, fireEvent, screen } from '@testing-library/react';
// import App from './App';

// describe('App Component', () => {

//   test('renders canvas, input, and button', () => {
//     const { getByTestId } = render(<App />);
    
//     const canvas = getByTestId('canvas');
//     const input = screen.getByPlaceholderText('Enter color name...');
//     const button = screen.getByRole('button', { name: /convert/i });

//     expect(canvas).toBeInTheDocument();
//     expect(input).toBeInTheDocument();
//     expect(button).toBeInTheDocument();
//   });

//   test('input value changes when user types', () => {
//     render(<App />);

//     const input = screen.getByPlaceholderText('Enter color name...');
//     fireEvent.change(input, { target: { value: 'red' } });
    
//     expect(input.value).toBe('red');
//   });

//   test('displays an alert for invalid color input', () => {
//     render(<App />);

//     const input = screen.getByPlaceholderText('Enter color name...');
//     const button = screen.getByRole('button', { name: /convert/i });
    
//     fireEvent.change(input, { target: { value: 'invalidColor' } });
//     window.alert = jest.fn();  // Mock the alert function
//     fireEvent.click(button);

//     expect(window.alert).toHaveBeenCalledWith('Please enter a valid color name.');
//     expect(screen.getByText('#FFFFFF')).toBeInTheDocument(); // Hex code should not change
//   });

//   test('canvas background and hex code change on valid color input', () => {
//     const { getByTestId } = render(<App />);

//     const input = screen.getByPlaceholderText('Enter color name...');
//     const button = screen.getByRole('button', { name: /convert/i });
    
//     fireEvent.change(input, { target: { value: 'blue' } });
//     fireEvent.click(button);

//     const hexCode = getByTestId('hexCode').textContent;
//     expect(hexCode).toEqual('#0000FF');  // Canvas should show the hex code for blue
//   });

//   test('canvas updates background after valid input', () => {
//     render(<App />);

//     const canvas = screen.getByRole('img', { name: /canvas/i });
//     const input = screen.getByPlaceholderText('Enter color name...');
//     const button = screen.getByRole('button', { name: /convert/i });

//     fireEvent.change(input, { target: { value: 'green' } });
//     fireEvent.click(button);

//     const context = canvas.getContext('2d');
//     expect(context.fillStyle).toBe('#00FF00'); // Check if canvas background changed to green
//   });
  
// });
