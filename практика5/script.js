const URL = "http://localhost:3000/BLOCKS";
const buttonPost = document.querySelector('.add');
const buttonGet = document.querySelector('.get');
const container = document.querySelector('.container');
const getData = async (url) => {
    const res = await fetch(url);
    const data = res.json();
    return data
}
const postData = async (url, obj) => {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return res.json()
}
class Blocks {
    constructor(width, height, background, border, borderradius) {
        this.width = width + 'px';
        this.height = height + 'px';
        this.background = background;
        this.top = Math.floor(Math.random() * 600) + 'px';
        this.left = Math.floor(Math.random() * 800) + 'px';
        this.border = border;
        this.borderradius = borderradius;
    }
}
buttonPost.addEventListener('click', async () => {
    let bWidth = document.querySelector('input.width').value;
    let bHeight = document.querySelector('input.height').value;
    let bBackground = document.querySelector('input.background').value;
    let bBorder = document.querySelector('input.border').value;
    let bBorderradius = document.querySelector('input.borderradius').value;
    let block = new Blocks(bWidth, bHeight, bBackground, bBorder, bBorderradius);
    postData(URL, block);
})
buttonGet.addEventListener('click', async () => {
    let blocks = await getData(URL);
    blocks.forEach(el => {
        container.insertAdjacentHTML(`beforeend`, `
            <div class = "block" 
                style="
                    width: ${el.width}; 
                    height: ${el.height}; 
                    background: ${el.background};
                    top: ${el.top};
                    left: ${el.left};
                    border: ${el.border};
                    border-radius: ${el.borderradius};
                ">
                <span>|${el.width}|</span>
                <span>|${el.height}|</span>
                <span>|${el.background}|</span>
                <span>|${el.border}|</span>
                <span>|${el.borderradius}|</span>
            </div>
        `);
    })
})