setInterval( function() {
    let btn = document.getElementsByClassName("ytp-skip-ad-button");
    
    if (btn.length > 0 && btn != undefined) {
        btn[0].click();
        // console.log("skipping");
    }
}, 1000);