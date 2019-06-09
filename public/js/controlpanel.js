const socket = io();

var display = localStorage.getItem('display');
document.getElementById('strong').innerHTML = display;

document.getElementById('red').addEventListener('click', () => {
    socket.emit('reqRed', display);
    console.log(display);
});
document.getElementById('blue').addEventListener('click', () => {
    socket.emit('reqBlue', display);
});