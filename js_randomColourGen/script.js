const getColour = () =>{
    const randomNumber = (Math.random() * 0xfffff * 1000000).toString(16);
    const randomCode =  '#' + randomNumber.slice(0, 6);

    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}
document.getElementById("btn").addEventListener("click",getColour);

const copy = () => {
    navigator.clipboard.writeText(document.getElementById("color-code").innerText);
}
document.getElementById("copy").addEventListener("click",copy);
// init fumction call
getColour();