self.onmessage = (event) =>{
    let time = event.data
    let stop = setInterval(() => {
        if (time <= 0) {
            clearInterval(stop)
        } else {
            time = time - 1000
             self.postMessage(time)
        }
    }, 1000);
}