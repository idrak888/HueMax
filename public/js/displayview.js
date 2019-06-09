const socket = io();

var codename = localStorage.getItem('displayCheck');

socket.on('turnRed', display => {
    document.getElementById('Display').style.backgroundColor = '#E74C3C';
});
socket.on('turnBlue', display => {
    document.getElementById('Display').style.backgroundColor = '#3498DB';
});
socket.on('turnPurple', display => {
    document.getElementById('Display').style.backgroundColor = '#8E44AD';
});
socket.on('turnPink', display => {
    document.getElementById('Display').style.backgroundColor = '#E060E8';
});
socket.on('turnGreen', display => {
    document.getElementById('Display').style.backgroundColor = '#2ECC71';
});
socket.on('turnOrange', display => {
    document.getElementById('Display').style.backgroundColor = '#F39C12';
});