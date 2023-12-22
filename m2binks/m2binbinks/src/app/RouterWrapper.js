// Crée un composant nommé RouteWrapper.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RouteWrapper = ({ path, children }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === path) {
      router.push(path);
    }
  }, [router.pathname, path]);

  return children;
};

export default RouteWrapper;
