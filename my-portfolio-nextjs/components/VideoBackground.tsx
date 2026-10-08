export default function VideoBackground(): JSX.Element {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline preload="auto" id="bgg-video">
        <source src="/assets/videos/bgg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
