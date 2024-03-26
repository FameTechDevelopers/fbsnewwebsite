import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/Components/ui/resizable";

const VideoSection = () => {
  return (
    <div className=" mt-32 mb-16">
      <div className="flex h-full items-center justify-center">
        <video
          loop
          autoPlay
          className=" object-cover h-[554px] w-[100%]"
          muted
          typeof="video/mp4"
          src="https://video-previews.elements.envatousercontent.com/h264-video-previews/06d49204-6728-4304-b336-f4e56dea6124/39125100.mp4"
        ></video>
      </div>
    </div>
    // <ResizablePanelGroup
    //   direction="horizontal"
    //   className="w-full rounded-lg border"
    // >
    //   <ResizablePanel defaultSize={40}>
    //     <div className="flex h-full items-center justify-center">
    //       <video
    //         loop
    //         autoPlay
    //         className=" object-cover h-[554px] w-[100%]"
    //         muted
    //         typeof="video/mp4"
    //         src="https://famebusinesssolutions.com/video/10419130%20(1).mp4"
    //       ></video>
    //     </div>
    //   </ResizablePanel>
    //   <ResizableHandle withHandle />
    //   <ResizablePanel defaultSize={60}>
    //     <div className="flex h-full items-center justify-center">
    //       <video
    //         loop
    //         autoPlay
    //         className=" object-cover h-[554px] w-[100%]"
    //         muted
    //         typeof="video/mp4"
    //         src="https://video-previews.elements.envatousercontent.com/h264-video-previews/06d49204-6728-4304-b336-f4e56dea6124/39125100.mp4"
    //       ></video>
    //     </div>
    //   </ResizablePanel>
    // </ResizablePanelGroup>
  );
};

export default VideoSection;
