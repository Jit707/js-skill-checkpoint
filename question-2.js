// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้

let id5 = {id:5,task : "Walk the dog" }
userTaskList.push(id5)

userTaskList[3]["task"] = "Go to the gym"

userTaskList.pop()


console.log(userTaskList[3]);
