// utils/PageTitleUpdater.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Daniel Ward';
        break;
      case '/portfolio':
        document.title = 'Portfolio | Daniel Ward';
        break;
      case '/ui-samples':
        document.title = 'UI Samples | Daniel Ward';
        break;
      case '/projects':
        document.title = 'Projects | Daniel Ward';
        break;
      case '/contact':
        document.title = 'Contact | Daniel Ward';
        break;
      default:
        document.title = '404 | Daniel Ward';
    }
  }, [location.pathname]);

  return null;
}