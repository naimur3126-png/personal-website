// Hide project video players when the corresponding video file has not been added yet.
document.querySelectorAll('.video-box').forEach((box) => {
  const video = box.querySelector('video');
  const note = box.querySelector('.video-missing');

  video.addEventListener('loadedmetadata', () => {
    note.style.display = 'none';
  });

  video.addEventListener('error', () => {
    video.style.display = 'none';
    note.style.display = 'block';
  });
});
