const URL = 'http://localhost:3000/USERS';
let users = [];
let getData = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data
}

const fillList = (user) => {
    let list = document.querySelector('.container .block .blockleft')
    list.insertAdjacentHTML(`beforeend`, `
    <div class="user">
        <div class="name">${user["name"]}</div>
        <div class="comment">${user["comment"]}</div>
    </div>
   `)
}

const fillList2 = (user) => {
    let list2 = document.querySelector('.container .block .blockright')
    list2.insertAdjacentHTML(`beforeend`, `
    <div class="user">
        <div class="name">${user["name"]}</div>
        <div class="comment">${user["comment"]}</div>
    </div>
   `)
}

let get = async () => {
    users.push(await getData(`${URL}`))
    for (let i = 1; i < 6 ; i++) {
        fillList(users[0][(i-1)])
    }
};

get();

let a = () => {
    let filtrarr = users;
    for(let i = 1; i < 6; i++){
        if (users[0][(i-1)]["comment"].split('').length>20){
            let ggg = users[0][(i-1)]["comment"].split('').slice(0,20);
            ggg.push('...');
            users[0][(i-1)]["comment"] = ggg.join('');
        }
    }
    for (let i = 1; i < 6 ; i++) {
        fillList2(filtrarr[0][(i-1)])
    }
}

document.querySelector('.filtr').addEventListener('click', a);