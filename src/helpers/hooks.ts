import { useEffect, useState, useRef } from 'react';

export function useCheckElementInViewport() {
  // get element from dom
  const $element: any = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver(entries => {
      // when 'element DOM' change.. get their info
      console.log(entries);
      // from array's entries... get if the element its visible in the viewport
      const { isIntersecting } = entries[0];
      console.log({ isIntersecting });
      if (isIntersecting) {
        // set the article to show and stop observer
        setShow(true);
        observer.disconnect();
      }
    });
    // observe the saved 'element DOM'
    observer.observe($element.current);
    // console.log($element.current);
  }, [$element]); // stop effect when the 'DOM element changes'

  return [show, $element];
}

export function useLocalStorage(key: any, initialValue: any) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  return [storedValue, setLocalStorage];
}
