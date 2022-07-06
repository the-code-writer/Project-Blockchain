const socket = io('https://localhost:8195')
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
    host: "localhost",
    secure: false,
    port: 8190
});

const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    addVideoStream(myVideo, stream)

    myPeer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream)
        })
    });

    socket.on('user-connected', userId => {
        console.log("USER CONNECTED", userId);
        connectToNewUser(userId, stream)
    });

})

socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
    console.log("MY PEER OPEN", id);
    socket.emit('join-room', ROOM_ID, id);
})

function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
    })
    call.on('close', () => {
        video.remove()
    })

    peers[userId] = call
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {

        video.play();

    })
    //videoGrid.append(video);

    console.log("ADD NEW VIDEO", video);

    jQuery("#video-grid").append(video);

}