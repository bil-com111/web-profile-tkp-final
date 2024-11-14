function toggleBiodata(id) {
    const biodata = document.getElementById(id);
    if (biodata.classList.contains('active')) {
        biodata.classList.remove('active');
    } else {
        biodata.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const colorToggleButton = document.getElementById('colorToggle');

    colorToggleButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});


function b(){
    document.getElementById("4").innerHTML = 'data terhapus'
}
function b1(){
    document.getElementById("2").innerHTML = 'data terhapus'
}
function okannyocot(){
    document.getElementById("1").innerHTML = 'data terhapus'
}