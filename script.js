alert("Let's Play Snake Water Gun")
alert("Enter\nS: Snake\nW: Water\nG: Gun")
alert("You have 5 chances")
const rand = (arr) => {
  return Math.floor(Math.random() * arr.length)
}
let arr = ["S", "W", "G"]
let cnt = 5
let total_cpu = 0
let total_user = 0
const game = (user, cpu) => {
  if (cpu == user) {
    return 0.5
  }
  else if (cpu == "S" && user == "W") {
    return 0
  }
  else if (cpu == "S" && user == "G") {
    return 1
  }
  else if (cpu == "W" && user == "S") {
    return 1
  }
  else if (cpu == "W" && user == "G") {
    return 0
  }
  else if (cpu == "G" && user == "S") {
    return 0
  }
  else if (cpu == "G" && user == "W") {
    return 1
  }
}
while (cnt > 0) {
  let user = prompt("Enter your choice")
  let cpu = arr[rand(arr)]
  let result = game(user, cpu)
  if (result == 0.5) {
    alert("Draw")
    total_user += 0.5
    total_cpu += 0.5
  }
  else if (result == 1) {
    alert("You Won")
    total_user += 1
  }
  else {
    alert("You Lost")
    total_cpu += 1
  }
  cnt--
}
if (total_user > total_cpu) {
  alert("You are the Grand winner with a score of " + total_user)
}
else if (total_user < total_cpu) {
  alert("Cpu is the Grand winner with a score of " + total_cpu);
}
else if (total_user == total_cpu) {
  alert("Match Draw")
}
