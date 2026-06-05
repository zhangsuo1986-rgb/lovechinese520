type YouTubeEmbedProps = {
  id: string;
  title: string;
};

export function YouTubeEmbed({ id, title }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-sm backdrop-blur">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
