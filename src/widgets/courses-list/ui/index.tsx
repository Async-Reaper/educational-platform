import { Course } from "entities/course";
import React, { useEffect } from "react";
import { useAppDispatch } from "shared/libs/hooks/useAppDispatch";
import { useAppSelector } from "shared/libs/hooks/useAppSelector";
import { AppLink } from "shared/ui";
import { getCourses } from "widgets/courses-list/api/getCourses";
import { getAllCoursesSelector as courses } from "../model/selector/getAllCourses";
import { CourseType } from "../model/types";
import cls from "./styles.module.scss";

const Component = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <div className={cls.courses__wrapper}>
      {courses.map((course: CourseType) => (
        <AppLink to="/course">
          <Course name={course.title} />
        </AppLink>
      ))}
    </div>
  );
};

export const CoursesList = React.memo(Component);
