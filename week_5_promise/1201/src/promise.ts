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

let uid = 1;

// 定義一個 Promise 函數
function readFile(path: string, prevData?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      const resData = JSON.parse(data);
      resolve({
        prevData,
        resData,
      });
    });
  });
}

// 讀取 user.json 資料
readFile(userPath)
  .then((res: any) => {
    const { resData } = res;
    const userInfo: user = resData.filter((item: user) => {
      return item.id === uid;
    })[0];
    return readFile(userCoursePath, userInfo);
  })
  // 讀取 userCourse.json 資料
  .then((res: any) => {
    const { prevData, resData } = res;
    const userId = prevData.id;
    const userCourse: userCourse = resData.filter((item: userCourse) => {
      return item.uid === userId;
    })[0];
    return readFile(coursePath, {
      username: prevData.username,
      userCourse,
    });
  })
  // 讀取 course.json 資料
  .then((res) => {
    const { prevData, resData } = res;
    const userCourse = prevData.userCourse.course;
    let arr: any = [];
    userCourse.map((id: number) => {
      resData.map((item: any) => {
        if (item.id === id) {
          arr.push(item);
        }
      });
    });
    const userCourseInfo = {
      username: prevData.username,
      course: arr,
    };
    const path1 = path.resolve(__dirname, `../data/${prevData.username}.json`);
    // 寫入檔案
    console.log("正在寫入檔案");
    fs.writeFileSync(path1, JSON.stringify(userCourseInfo));
  })
  .catch((err) => {
    console.log(err);
  });
