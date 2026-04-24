import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';
import cursorImg from '../imports/Cute_cursor.png';

export default function App() {
  useEffect(() => {
    // Apply custom cursor globally
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        cursor: url('${cursorImg}'), auto !important;
      }
      a, button, input[type="button"], input[type="submit"], [role="button"], .group {
        cursor: url('${cursorImg}'), pointer !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <RouterProvider router={router} />;
}