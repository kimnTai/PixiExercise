import fs from "fs";
import path from "path";

type user = {
  id: number;
  username: string;
};

type course = {
  id: number;
  name: string;
};

type userCourse = {
  uid: number;
  course: number[];
};

const userCoursePath = path.resolve(__dirname, "../data/userCourse.json");
const coursePath = path.resolve(__dirname, "../data/course.json");
const userPath = path.resolve(__dirname, "../data/user.json");

export { user, course, userCourse, userCoursePath, userPath, coursePath };
