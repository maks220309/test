const getData = async(url)=>{
    const res = await fetch(url);
    const json = res.json();
    return json
}

let a = async()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const data = await getData(url);
    for(let i=0; i<data.length; i++){
        if(data[i]["title"].length<22){
            document.querySelector('.container ul').insertAdjacentHTML(`beforeend`,
            `
            <li>${data[i]["title"]}</li>
            `)
        }
    }
}
a();