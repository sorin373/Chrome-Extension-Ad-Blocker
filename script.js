setInterval( function() {

    // homepage ads
    let adDiv_1 = document.getElementsByClassName("ytd-ad-slot-renderer");
    let adDiv_2 = document.getElementsByClassName("ytd-display-ad-renderer");

    if (adDiv_1.lenght > 0 && adDiv_1 != undefined)
	    adDiv_1.style.display = 'none';

    if (adDiv_2.lenght > 0 && adDiv_2 != undefined)
	    adDiv_2.style.display = 'none';

    let skipBtn = document.getElementsByClassName("ytp-skip-ad-button");
    
    // skippable ads
    if (skipBtn.length > 0 && skipBtn != undefined) 
        skipBtn[0].click();
    else
    {
        // non skippable ads
        let prevBtn = document.getElementsByClassName("ytp-preview-ad");

        // yt warning - blocking ads 
	let blockDiv = document.getElementsByClassName("ytd-enforcement-message-view-model");

        if ((prevBtn.length > 0 && prevBtn != undefined) || blockDiv.length > 0 && blockDiv != undefined)
            location.reload();
    }

}, 100); // 100ms
