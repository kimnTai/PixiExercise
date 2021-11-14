class Student {
  pen!: Pen;
  write(): void {
    console.log("學生用" + this.pen.toString());
  }
}
class Pen {
  toString(): string {
    return "筆寫字";
  }
}

// Configuration
class Config {
  // Bean
  student(): Student {
    const pen = new Pen();
    const student = new Student();
    student.pen = pen;
    return student;
  }
}

const stu02 = new Config().student();
stu02.write();
