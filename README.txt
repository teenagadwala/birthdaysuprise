HER BIRTHDAY WEBSITE — QUICK GUIDE
=====================================

⚠️ IMPORTANT — READ THIS FIRST
This is a multi-page website, so it only works correctly when ALL the
files stay together in the same folder. If you only open or share
index.html by itself, the other pages and the styling will break.

HOW TO OPEN IT
1. Unzip the whole folder first — right-click the zip → "Extract All"
   (Windows) or just double-click it (Mac). Don't peek inside the zip
   without extracting; some previewers skip loading the CSS/JS.
2. Open the extracted "bday" folder. You should see index.html sitting
   next to style.css, app.js, and five other .html files, plus an
   "assets" folder.
3. Double-click index.html to open it in a real browser (Chrome, Safari,
   Edge, Firefox). On a phone, tap it and choose "Open in Chrome/Safari"
   rather than a built-in file previewer.

WHAT'S INSIDE
- index.html   -> the envelope + the hub with 5 doors
- gifts.html   -> the 20-gift page
- story.html   -> the "Our Story" timeline
- notes.html   -> the 10 flip-card love notes
- wishes.html  -> the tap-for-a-wish jar
- letter.html  -> the final typewriter letter
- style.css    -> the look (you shouldn't need to touch this)
- app.js       -> shared logic (you shouldn't need to touch this)
- assets/images, assets/videos -> put her photos and videos here

HOW TO PERSONALIZE EACH PAGE
Every page has its own small, clearly-labeled block of content near the
top of its <script> section — you only ever edit that block, nothing
else on the page:
  - gifts.html  -> the GIFTS list (20 entries, text/photo/video)
  - story.html  -> the MOMENTS list (your timeline)
  - notes.html  -> the NOTES list (10 short reasons)
  - wishes.html -> the WISHES list (as many as you like)
  - letter.html -> the LETTER text block (your actual final message)

For photo/video gifts in gifts.html: drop the file into assets/images
or assets/videos, then set "media" to match, e.g.
  media: "assets/images/gift-02.jpg"
Anything you haven't filled in yet just shows a soft placeholder
instead of breaking, so you can finish it gradually.

HOW TO SHARE IT WITH HER
- Zip the whole "bday" folder and send it to her to unzip and open
  index.html — works fully offline.
- Or drag the folder into a free static host like Netlify Drop
  (netlify.com/drop) for a real link you can text her — takes about
  two minutes and needs no coding.

Happy birthday to her.
