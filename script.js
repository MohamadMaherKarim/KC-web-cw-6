alert("مرحباً بك في موقعي الذي سيحسب درجتك!!");
let Grade = prompt("قم بادخال درجتك بالارقام");
console.log(Grade);
if (Grade >= 90) {
  console.log("لقد حصلت على تقدير امتياز");
} else if (Grade >= 80 && Grade <= 89) {
  console.log("لقد حصلت على تقدير جيد جدا");
} else if (Grade >= 70 && Grade <= 79) {
  console.log("لقد حصلت على تقدير جيد ");
} else if (Grade >= 60 && Grade <= 69) {
  console.log("لقد حصلت على تقدير مقبول");
} else if (Grade >= 50 && Grade <= 59) {
  console.log("لقد حصلت على تقدير ضعيف ");
} else if (Grade < 50) {
  console.log("لقد حصلت على تقدير راسب");
}
