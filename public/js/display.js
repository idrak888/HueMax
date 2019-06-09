const socket = io();
var parseQueryString = () => {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

var params = parseQueryString(); 

socket.on('newDisplay', () => {
    socket.emit('listNewDisplay', params["codename"]);
});
socket.on('showReq', device => {
    if (params["codename"] == device) {
        const reqDiv = document.querySelector('.request');
        var codename = params["codename"];

        reqDiv.style.display = 'block';
        document.querySelector('.request #controller').innerHTML = codename;
    }   
});

document.querySelector('.request #accept').addEventListener('click', () => {
    socket.emit('controlAccepted', params["codename"]);
    localStorage.setItem('displayCheck', params["codename"]);
    window.location = '/display-view.html';
});