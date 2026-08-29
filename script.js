alert("JS working");
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234"){
        alert("Login successful");
        window.location.href = "Home.html";
    }
    else{
        alert("Invalid username or password");
    }
}
function logout(){
window.location.href = "index.html";
}
function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}
function calculateGPA(){
    let marks = parseFloat(document.getElementById("marks").value);

    if(isNaN(marks)){
        alert("Enter Marks");
        return;
    }

    let gpa = (marks / 10).toFixed(2);
    document.getElementById("gpaResult").innerText = "Your GPA: " + gpa;
}
function calculateAttendance(){
    let attended = parseFloat(document.getElementById("attendance").value);
    let total = parseFloat(document.getElementById("total").value);

    if(isNaN(attended) || isNaN(total)){
        alert("Enter values");
        return;
    }

    let percentage = ((attended / total) * 100).toFixed(2);

    document.getElementById("attendanceResult").innerText =
        "Attendance: " + percentage + "%";
}
function addGoal(){
let goal = document.getElementById("goalInput").value;
if(goal === "") return;
let li=document.createElement("li");
li.innerText = goal;
document.getElementById("goalList").appendChild(li);
document.getElementById("goalInput").value = "";
}
let time = 1500;
let timerRunning = false;
function startTimer(){
if(timerRunning) return;
timerRunning = true;
let interval = setInterval(function(){
let minutes = Math.floor(time/60);
let seconds = time%60;
document.getElementById("timer").innerText = (minutes< 10 ? "0" : "") + minutes + ":" +(seconds < 10 ? "0": "") + seconds;
time--;
if(time<0){
clearInterval(interval);
alert("Pomodoro Session Completed!");
time = 1500;
timerRunning = false;
}
},1000);
}
function askAI(){
    let question = document.getElementById("userQuestion").value.toLowerCase();
    let answer = "";

    if(question.includes("exam")){
        answer = "Prepare a timetable and revise daily.";
    }
    else if(question.includes("gpa")){
        answer = "Focus on assignments and internal marks.";
    }
    else if(question.includes("study")){
        answer = "Use Pomodoro technique and short notes.";
    }
    else if(question.includes("html")){
        answer = "HTML is used to create the structure of a webpage.";
    }
    else if(question.includes("css")){
        answer = "CSS is used to style and design webpages.";
    }
    else if(question.includes("javascript")){
        answer = "JavaScript adds interactivity and functionality to webpages.";
    }
    else if(question.includes("attendance")){
        answer = "Maintain at least 75% attendance to stay safe.";
    }
    else if(question.includes("time")){
        answer = "Use the Pomodoro technique: 25 minutes study, 5 minutes break.";
    }
    else if(question.includes("coding")){
        answer = "Practice coding daily and build small projects.";
    }
    else{
        answer = "Keep learning and stay consistent.";
    }

    document.getElementById("aiResponse").innerText = answer;
}
function showQuote(){
let quotes = [
"Success is the sum of small efforts repeated daily.",
"Study now, shine later.",
"Push yourself because no one else will do it for you.",
"Dream big and work hard.",
"Every day is a chance to improve."
];
let random = Math.floor(Math.random()*quotes.length);
document.getElementById("quote").innerText = quotes[random];
}
