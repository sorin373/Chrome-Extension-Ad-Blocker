setInterval( function() {

    let skipBtn = document.getElementsByClassName("ytp-skip-ad-button");
    
    // skippable ads
    if (skipBtn.length > 0 && skipBtn != undefined) {
        skipBtn[0].click();
        // console.log("skipping");
    }
    else
    {
        // non skippable ads
        let prevBtn = document.getElementsByClassName("ytp-preview-ad");

        if (prevBtn.length > 0 && prevBtn != undefined)
            location.reload();
    }

}, 500);