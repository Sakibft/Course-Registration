import { useEffect, useState } from "react";
import Courses from "./components/Courses/Courses";

const Dev = ({coursesSelectHandle}) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 ">
      {courses.map((course) => (
        <Courses coursesSelectHandle={coursesSelectHandle} key={course.id} course={course}/>
      ))}
    </div>
  );
};

export default Dev;
