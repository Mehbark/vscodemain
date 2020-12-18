function anger() {
    document.getElementById("h0").innerHTML = ">:(";
    console.log("so, this is being called then???");
}
function yeah() {
    const input = document.querySelector('input');
    const log = document.getElementById('values');

    input.addEventListener('input', updateValue);

    function updateValue(e) {
    log.textContent = e.target.value;
}
}