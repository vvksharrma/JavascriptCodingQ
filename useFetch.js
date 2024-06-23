//Rules of custom Hooks
// hooks are designed for reuse, promoting a modular and maintainable codebase.
// 1.Custom hooks must always start with the prefix "use".charAt(for ESLint plugin to detect hooks violations and consistency).
// 2.must return an array or object with consistent values.
// 3.should not contain JSX elements
// 3.Only call hooks from React functions. Don’t call hooks from regular JavaScript functions.
// 4.Only call hooks at the top level. Don’t call hooks inside loops, conditions, or
// nested functions.

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if needed (e.g., aborting ongoing fetch request)
    };
  }, [url]); // Dependency array ensures this effect runs only when `url` changes

  return { data, loading, error };
}
export default useFetch;