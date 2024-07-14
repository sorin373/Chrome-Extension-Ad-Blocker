setInterval( function() {

    // homepage ads
    let adDiv_1 = document.getElementsByClassName("ytd-ad-slot-renderer");
    let adDiv_2 = document.getElementsByClassName("ytd-display-ad-renderer");
    let adDiv_3 = document.getElementsByClassName("ytd-player-legacy-desktop-watch-ads-renderer");

    if (adDiv_1.length > 0 && adDiv_1 != undefined)
	for (let i = 0; i < adDiv_1.length; i++)
            adDiv_1[i].style.display = 'none';

    if (adDiv_2.length > 0 && adDiv_2 != undefined)
	for (let i = 0; i < adDiv_2.length; i++)
            adDiv_2[i].style.display = 'none';

    if (adDiv_3.length > 0 && adDiv_3 != undefined)
        for (let i = 0; i < adDiv_3.length; i++)
            adDiv_3[i].style.display = 'none';

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

        if ((prevBtn.length > 0 && prevBtn != undefined) || (blockDiv.length > 0 && blockDiv != undefined))
            location.reload();
    }

}, 100); // 100ms
