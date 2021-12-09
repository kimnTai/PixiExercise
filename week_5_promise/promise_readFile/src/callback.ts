import fs from "fs";
import path from "path";
import { user, course, userCourse } from "./type";
import { coursePath, userCoursePath, userPath } from "./type";

let uid = 1;

// 讀取 user.json 資料
fs.readFile(userPath, "utf-8", (err, data) => {
  const userData: user[] = JSON.parse(data);
  const userInfo: user = userData.filter((item: user) => {
    return item.id === uid;
  })[0];

  // 讀取 userCourse.json 資料
  fs.readFile(userCoursePath, "utf-8", (err, data) => {
    const userCourseData: userCourse[] = JSON.parse(data);
    const userId = userInfo.id;
    const userCourse: userCourse = userCourseData.filter((item: userCourse) => {
      return item.uid === userId;
    })[0];

    // 讀取 course.json 資料
    fs.readFile(coursePath, "utf-8", (err, data) => {
      const courseData: course[] = JSON.parse(data);
      const userCourses = userCourse.course;
      let arr: any = [];
      // 比對後放進 arr
      userCourses.map((id) => {
        courseData.map((item) => {
          if (item.id === id) {
            arr.push(item);
          }
        });
      });
      const userCourseInfo = {
        username: userInfo.username,
        course: arr,
      };
      const path1 = path.resolve(
        __dirname,
        `../data/${userInfo.username}.json`
      );
      // 寫入檔案
      fs.writeFileSync(path1, JSON.stringify(userCourseInfo));
    });
  });
});
