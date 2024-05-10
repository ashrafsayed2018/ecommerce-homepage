import React from "react";

export default function Video() {
  return (
    <div className="px-8 mb-16">
      <div
        className="relative h-0 overflow-hidden max-w-full w-full"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/x0XmG88OIm0"
          title="Classic style"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
