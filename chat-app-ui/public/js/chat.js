const socket = io()

socket.on('welcome', () => {
    console.log("welcome to hell, bitch!")
})

socket.on('newText', (newText) => {
    console.log(newText)
})

document.querySelector('#submit').addEventListener('click', () => {
    let clientTxt = document.querySelector('#clientTxt').value
    socket.emit('clientTxt', clientTxt, (profanityWarning) => {
        if (profanityWarning){
            return console.log(profanityWarning)
        }
    })
})