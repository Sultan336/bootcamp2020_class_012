var cloudElement = document.getElementById("cloud-div")

var animatedElem = cloudElement.animate(
    [
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(900px,0px)' },
    ],
    {
        duration: 5000,
        iterations: Infinity,
        playbackRate: -4,

    });

var planeElement = document.getElementById('plane-div')

var planeInAnimation = planeElement.animate(
    [
        { transform: 'translate(0px,0px)' },
        { transform: 'translate(600px,0px)' },
    ],
    {
        duration: 3000,
        iterations: Infinity,
    });