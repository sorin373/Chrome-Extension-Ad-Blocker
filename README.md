# YouTube

The script in the file `script.js` runs every 100ms and checks if the <b>skip</b> button exists in the DOM. If so it is clicked automatically. However, if the ad is non-skipable, the page gets reloaded. This will go on until a skipable ad appears or the ad just stops showing up. In addition, the same logic will apply if an ad appears in the middle of the video (keep in mind that this will not change the timestamp of the video, even when the page is reloaded). The script also blocks homepage ads and other visual obstructions which may appear on the right side of the video player. Last but not least, this script only runs when YouTube is opened (Check out [manifest.json](https://github.com/sorin373/Chrome-Extension-Ad-Blocker/blob/main/manifest.json)).

> **Note:** For now, it can bypass the YouTube enforcement and effectively hide ads by manipulating the DOM and refreshing the page.

# Other ads

The file `rules.json` is designed to block web traffic to `doubleclick.net` and `googleadservices.com` which are the main advertising services used by Google. Of course, many more could be added to this list.

# Intalling

After cloning the repository locally, enable the developer mode for extensions (click `manage extensions`). Click on `load unpacked` and choose the folder where the cloned files are located. 

> **Note:** Do not delete the folder on the computer since Chrome needs to access the files every time it is ran (this is because the extension is loaded using the unpacked option).

# Tested on

- Chrome, Version 126.0.6478.127 (Official Build) (64-bit)