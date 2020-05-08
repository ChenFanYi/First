window.onload = main();

function main() {
    const button = document.getElementById("button");
    button.addEventListener("click", showTime());
    return 0;
}

function showTime() {
    document.getElementById("text").innerText=new Date().toLocaleDateString();
}