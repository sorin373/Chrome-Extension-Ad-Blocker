setInterval(function () { 
    // homepage ads
    const adSelectors = [
        "ytd-ad-slot-renderer",
        "ytd-display-ad-renderer",
        "ytd-player-legacy-desktop-watch-ads-renderer"
    ];

    adSelectors.forEach(selector => {
        const ads = document.getElementsByClassName(selector);
        if (ads.length > 0)
            Array.from(ads).forEach(ad => ad.style.display = 'none');
    });

    // skippable ads
    const skipBtn = document.getElementsByClassName("ytp-skip-ad-button");
    if (skipBtn.length > 0)
        skipBtn[0].click();
    else 
    {
        // non-skippable ads and warning handling
        const prevBtn = document.getElementsByClassName("ytp-preview-ad");
        const blockDiv = document.getElementsByClassName("ytd-enforcement-message-view-model");

        if (prevBtn.length > 0 || blockDiv.length > 0)
            location.reload();
    }
}, 1000); // run every 1000ms (1 second) for better performance