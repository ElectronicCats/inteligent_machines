import { useState, useCallback } from 'react';
/**
 *
 * @param {boolean} initialValue
 * @return {Array}
 */
export const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
};
