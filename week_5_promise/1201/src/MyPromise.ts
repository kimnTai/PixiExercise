class MyPromise {
  private status;
  private value: any;
  private reason: any;

  constructor(
    executor: (
      resolve: (value: unknown) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    this.status = "Pending";
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value: any) => {
      if (this.status === "Pending") {
        this.status = "Fulfilled";
        this.value = value;
      }
    };
    const reject = (reason: any) => {
      if (this.status === "Pending") {
        this.status = "Rejected";
        this.reason = reason;
      }
    };
    executor(resolve, reject);
  }

  then(onFulfilled: any, onRejected?: any) {
    if (this.status === "Fulfilled") {
      onFulfilled(this.value);
    }
    if (this.status === "Rejected") {
      onRejected(this.reason);
    }
  }
}

export { MyPromise };
