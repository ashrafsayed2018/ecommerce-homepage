import React from "react";

export default function Video() {
  return (
    <>
      <div className="w-full h-[700px] bg-blue-300">
        <video
          src="/videos/main.mp4"
          title="Classic style"
          className="w-full h-full object-fill"
          controls
          autoPlay
        ></video>
      </div>
    </>
    // <div className="px-8 mb-16">
    //   <div
    //     className="relative h-0 overflow-hidden max-w-full w-full"
    //     style={{ paddingBottom: "56.25%" }}
    //   >
    //     <video src="videos/main.mp4" className="w-full h-full"></video>
    //     {/* <iframe
    //       className="absolute top-0 left-0 w-full h-full"
    //       src="https://www.youtube.com/embed/x0XmG88OIm0"
    //       title="Classic style"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //       referrerPolicy="strict-origin-when-cross-origin"
    //       allowFullScreen
    //     ></iframe> */}
    //   </div>
    // </div>
  );
}
