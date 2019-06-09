const socket = io();

var displays = [];

const renderList = newDevice => {
    const list = document.querySelector('#list');
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(newDevice));

    li.appendChild(button);
    list.appendChild(li);

    button.addEventListener('click', (e) => {
        socket.emit('sendReq', e.target.innerHTML);
    });
}

socket.on('displayListed', codename => {
    displays.push(codename);
    renderList(codename);
});

socket.on('initializeControl', codename => {
    localStorage.setItem('display', codename);
    window.location = '/control-panel.html';
});