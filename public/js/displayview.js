const socket = io();

var codename = localStorage.getItem('displayCheck');

socket.on('turnRed', display => {
    document.getElementById('Display').style.backgroundColor = 'red';
});
socket.on('turnBlue', display => {
    document.getElementById('Display').style.backgroundColor = 'blue';
});