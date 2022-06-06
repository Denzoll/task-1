const root = document.getElementById("Root");
const q = document.createElement("p");
q.textContent =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur';
q.style.border = "1px solid red";
q.style.width = "550px";
q.style.borderRadius = "15px";
q.style.margin = "auto";
q.style.padding = "5px";

const list = document.createElement("ul");
const google = document.createElement("a");
const intocod = document.createElement("a");
const instagram = document.createElement("a");

google.textContent = "Google";
instagram.textContent = "Instagram";
intocod.textContent = "Intocod";

google.href =
  "https://www.google.com/search?q=%D0%B3%D1%83%D0%B3%D0%BB&oq=%D0%B3%D1%83%D0%B3%D0%BB&aqs=chrome..69i57j0i271l3.3661j0j7&sourceid=chrome&ie=UTF-8";
instagram.href =
  "https://rkn.gov.ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com";
intocod.href = "https://intocode.ru/";

list.style.display = "flex";
list.style.justifyContent = "space-between";
list.style.width = "500px";
list.style.margin = "auto";
list.style.padding = "10px";

list.append(google, instagram, intocod);
root.append(q, list);
