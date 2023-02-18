const URL = "http://localhost:3000/users";
let post = document.querySelector(".post");
let getb = document.querySelector(".get");
let users = [];

let getData = async (URL) => {
  const res = await fetch(URL);
  const data = await res.json();
  return data;
};

let patchData = async (url, obj) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  return res.json();
};

const fillList = (user) => {
  let list = document.querySelector(".container .users");
  list.insertAdjacentHTML(
    `beforeend`,
    `
    <div class="user">
         <div class="iduser"><span>ID:</span><span>${user["id"]}</span></div>
         <div class="nameuser"><span>Имя:</span><span>${user["name"]}</span></div>
         <div class="ageuser"><span>Возраст:</span><span>${user["age"]}</span></div>
         <div class="poluser"><span>Пол:</span><span>${user["pol"]}</span></div>
     </div>
   `
  );
};

let get = async () => {
  users.push(await getData(`${URL}`));
  document.querySelector(".container .users").innerHTML = ``;
  console.log(users)
  users[0].forEach((el)=>{
    fillList(el);
  })
};

const POST = async () => {
  let idp = document.querySelector(".id").value;
  document.querySelector(".id").value = "";
  let namep = document.querySelector(".name").value;
  document.querySelector(".name").value = "";
  let agep = document.querySelector(".age").value;
  document.querySelector(".age").value = "";
  let polp = document.querySelector(".pol").value;
  document.querySelector(".pol").value = "";
  let arr = { id: idp, name: namep, age: agep, pol: polp };
  await patchData("http://localhost:3000/users", arr);
  users.push(arr);
};

post.onclick = () => {
  POST();
};
getb.onclick = () => {
  get();
};
