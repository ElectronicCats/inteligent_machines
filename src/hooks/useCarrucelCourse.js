import { useEffect, useState } from 'react';

import { CURSES_CARDS } from '../consts/courses/CardList';

const getItemBy = (param) => (array, value) =>
  array.find((elment) => elment[param] === value);
const getItemById = getItemBy('id');

const getIndexBy = (param) => (array, value) =>
  array.findIndex((elment) => elment[param] === value);
const getIndexById = getIndexBy('id');

const getCourseNameById = (idValue) => {
  let item = getItemById(CURSES_CARDS, idValue);
  return item.couseName;
};
const getPrevCourseId = (idCurrent) => {
  let len = CURSES_CARDS.length;
  let currentIndex = getIndexById(CURSES_CARDS, idCurrent);
  //  previous Item
  let item = CURSES_CARDS[(currentIndex + len - 1) % len];
  return item.id;
};
const getNextCourseId = (idCurrent) => {
  let len = CURSES_CARDS.length;
  let currentIndex = getIndexById(CURSES_CARDS, idCurrent);
  // next item;
  let item = CURSES_CARDS[(currentIndex + 1) % len];
  return item.id;
};

export const useCarrucelCourseNav = (classId) => {
  const [title, setTitle] = useState('');
  const [nexCoursePath, setNextCoursePath] = useState(null);
  const [prevCoursePath, setprevCoursePath] = useState(null);

  useEffect(() => {
    setTitle(getCourseNameById(classId));
    setNextCoursePath(`/class/${getNextCourseId(classId)}`);
    setprevCoursePath(`/class/${getPrevCourseId(classId)}`);
  }, [classId]);
  return {
    title,
    nexCoursePath,
    prevCoursePath,
  };
};
