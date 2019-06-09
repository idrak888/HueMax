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
document.getElementById('green').addEventListener('click', () => {
    socket.emit('reqGreen', display);
    console.log(display);
});
document.getElementById('purple').addEventListener('click', () => {
    socket.emit('reqPurple', display);
});
document.getElementById('pink').addEventListener('click', () => {
    socket.emit('reqPink', display);
    console.log(display);
});
document.getElementById('orange').addEventListener('click', () => {
    socket.emit('reqOrange', display);
});