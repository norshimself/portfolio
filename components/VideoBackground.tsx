'use client';

export default function VideoBackground() {
  return (
    <video
      className="body-overlay"
      muted
      autoPlay
      loop
      playsInline
      aria-hidden="true"
    >
      <source
        src="https://wpriverthemes.com/jayden/wp-content/themes/jayden/images/bg-3d/video4.mp4"
        type="video/mp4"
      />
    </video>
  );
}
