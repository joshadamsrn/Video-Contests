# GitHub Pages Video Site

This package gives you a simple GitHub Pages website for hosting and playing videos.

## Included files
- `index.html` — the video player page
- `videos/` — folder where your MP4 video files go

## How to use
1. Upload all of these files to a GitHub repository.
2. Add your own video files into the `videos` folder.
3. Edit `index.html` so the filenames and titles match your videos.
4. In GitHub, go to **Settings → Pages**.
5. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`

## Example repository options
- `videos` → site URL becomes `https://YOURUSERNAME.github.io/videos/`
- `YOURUSERNAME.github.io` → site URL becomes `https://YOURUSERNAME.github.io/`

## Current sample filenames expected by the page
- `videos/video1.mp4`
- `videos/video2.mp4`
- `videos/video3.mp4`

You can replace those with your own filenames and edit the playlist entries in `index.html`.
