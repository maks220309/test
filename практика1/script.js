const getData = async(url)=>{
    const res = await fetch(url);
    const json = res.json();
    return json
}

let a = async()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const data = await getData(url);
    console.log(data);
}
a();