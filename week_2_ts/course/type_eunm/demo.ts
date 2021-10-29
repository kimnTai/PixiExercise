enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED,
}
console.log(Status.OFFLINE); // 0
console.log(Status.ONLINE); // 1
console.log(Status.DELETED); // 2
console.log(Status[1]);

function getResult(status: Status) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}

const result = getResult(1);
console.log(result);
