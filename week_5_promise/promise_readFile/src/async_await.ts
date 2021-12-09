import fs from "fs";
import path from "path";
import {
  user,
  course,
  userCourse,
  userPath,
  userCoursePath,
  coursePath,
} from "./type";

// 定義一個 Promise 函數
function readFile(path: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      const resData = JSON.parse(data);
      resolve(resData);
    });
  });
}

// 讀取 user.json 資料
async function getData(uid: number): Promise<void> {
  // 讀取 user.json 資料
  const res = await readFile(userPath);
  const userInfo: user = res.filter((item: user) => {
    return item.id === uid;
  })[0];
  // 讀取 userCourse.json 資料
  const res_1: userCourse[] = await readFile(userCoursePath);
  const userId = userInfo.id;
  const userCourse = res_1.filter((item) => {
    return item.uid === userId;
  })[0];
  // 讀取 course.json 資料
  const res_2: course[] = await readFile(coursePath);
  const userCourse_2 = userCourse.course;
  let arr: course[] = [];
  userCourse_2.map((id) => {
    res_2.map((item) => {
      if (item.id === id) {
        arr.push(item);
      }
    });
  });
  const userCourseInfo = {
    username: userInfo.username,
    course: arr,
  };
  const path1 = path.resolve(__dirname, `../data/${userInfo.username}.json`);
  // 寫入檔案
  console.log("正在寫入檔案");
  fs.writeFileSync(path1, JSON.stringify(userCourseInfo));
}
getData(1);
