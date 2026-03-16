"use client";

import { useEffect, useRef, useState } from "react";

type VideoItem = {
  id?: string; // optional legacy id
  src?: string; // local or hosted video src (prefer this)
  title: string;
  thumbnail?: string; // optional thumbnail image path
  description?: string;
};

// Default uses local paths (place your MP4 files under public/uploads/videos/)
const defaultVideos: VideoItem[] = [
  {
    src: "/uploads/videos/video1.mp4",
    title: "Machine Overview",
    thumbnail: "/uploads/Vibrating_table.png",
  },
  {
    src: "/uploads/videos/video2.mp4",
    title: "Installation Walkthrough",
    thumbnail: "/uploads/85c9a281-beb6-49b1-bd1a-c4fa90f2dbd1.png",
  },
  {
    src: "/uploads/videos/video3.mp4",
    title: "Production Demo",
    thumbnail: "/uploads/f11064c9-8c3f-4f37-a403-9031816d12f0.png",
  },
];

export default function StatsAndVideos({
  videos = defaultVideos,
}: {
  videos?: VideoItem[];
}) {
  const [selected, setSelected] = useState<number>(0);
  const [countsStarted, setCountsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const stats = [
    { label: "Installations", target: 100 },
    { label: "Years Experience", target: 15 },
    { label: "Designs", target: 10 },
  ];

  // Intersection Observer to trigger count-up when section scrolls into view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountsStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // count-up state
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!countsStarted) return;

    const duration = 1200; // ms
    const start = performance.now();
    const startValues = values.slice();
    const raf = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const next = stats.map((s, i) =>
        Math.floor(s.target * easeOutCubic(progress))
      );
      setValues(next);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countsStarted]);

  // ease function
  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  const selectedVideo = videos[selected];

  // JSON-LD with VideoObject entries (only include videos that have src)
  const jsonLd: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vageshwari Engineering Works",
    url: "https://vageshwari-engineering.com",
    description:
      "Manufacturer of hydraulic brick making machines, fly ash brick machines and vibration tables.",
    sameAs: [],
  };

  const videoObjects = videos
    .filter((v) => v.src)
    .map((v) => ({
      "@type": "VideoObject",
      name: v.title,
      description: v.description || v.title,
      thumbnailUrl: v.thumbnail || null,
      contentUrl: v.src,
    }));

  if (videoObjects.length) {
    jsonLd.potentialAction = videoObjects;
  }

  // When selected changes, attempt to play the video (mobile may require user gesture)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    // ensure video stays muted by default and reset volume
    try {
      vid.muted = true;
      vid.volume = 0;
    } catch (e) {
      // ignore browsers that restrict volume control
    }
    // reload source and play if allowed
    vid.pause();
    vid.load();
    // attempt play (may be blocked on mobile without gesture)
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* ignore autoplay block */
      });
    }
  }, [selected]);

  return (
    <section id="stats-videos" className="scroll-mt-16 py-12">
      <div className="container mx-auto px-4">
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 rounded-lg border text-center bg-blue-600"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                {values[i]}
                {i === 0 || i === 1 || i === 2 ? "+" : ""}
              </h3>
              <p className="mt-2 text-lg text-muted-foreground text-white">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className="md:col-span-2 w-full mx-40 my-10 h-full">
            <div className="w-full rounded overflow-hidden bg-black">
              {selectedVideo?.src? (
                <video
                  key={selected}
                  ref={videoRef}
                  muted
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto md:aspect-video object-cover bg-black"
                  poster={selectedVideo.thumbnail}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              ) : (
                <div className="aspect-video bg-gray-900 flex items-center justify-center text-white">
                  <p className="px-4">Video not available</p>
                </div>
              )}
            </div>

            {/* <h4 className="mt-3 text-lg font-semibold">
              {selectedVideo?.title}
            </h4>
            {selectedVideo?.description && (
              <p className="text-sm text-muted-foreground">
                {selectedVideo.description}
              </p>
            )} */}
          </div>

          {/* <aside className="space-y-3">
            <h5 className="font-semibold text-xl">Video Playlist</h5>
            <ul className="flex flex-col">
              {videos.map((v, idx) => (
                <li key={v.title + idx}>
                  <button
                    onClick={() => setSelected(idx)}
                    className={`w-full text-left p-3 rounded hover:bg-muted/40 transition-colors flex items-center space-x-3 border ${
                      idx === selected ? "bg-muted/60 ring-2 ring-blue-200" : ""
                    }`}
                    aria-pressed={idx === selected}
                  >
                    <div className="w-20 h-12 bg-gray-100 flex-shrink-0 rounded overflow-hidden">
                      {v.thumbnail ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={v.thumbnail}
                          alt={v.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{v.title}</div>
                      <div className="text-xs text-muted-foreground">
                        Play video
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </aside> */}
        </div>
      </div>

      {/* JSON-LD for Organization + VideoObjects */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
