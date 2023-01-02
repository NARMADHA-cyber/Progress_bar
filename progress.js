window.addEventListener('load',()=>{
    let progressBars = document.querySelectorAll('.progress-bar');
    let values = [
       "90%",
       "60%",
       "50%",
       "80%"
    ];
    progressBars.forEach((progress,index)=>{
        progress.style.width =values[index];
    })
})