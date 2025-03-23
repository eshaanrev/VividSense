const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;
    blob.animate({
        left : `${clientX-250}px`,
        top : `${clientY-250}px`
    },{ duration:3000, fill:"forwards" });
    console.log(clientY);
 }
