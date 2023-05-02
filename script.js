// your code here
let btn = document.getElementById("button");
console.log(btn);
btn.addEventListener("click", () => {
  // e.preventDefault();
  let nameVal = document.getElementById("name").value;
  let yearVal = document.getElementById("year").value;
  str = "https://localhost:8080/";
  if (nameVal && yearVal) {
    str += `?name=${nameVal}&year=${yearVal}`;
    document.getElementById("url").innerHTML = str;
  } else if (nameVal) {
    str += `?name=${nameVal}`;
    document.getElementById("url").innerHTML = str;
  } else if (yearVal) {
    str += `?year=${yearVal}`;
    document.getElementById("url").innerHTML = str;
  }

  // document.getElementById("url").innerHTML = yearVal;
});