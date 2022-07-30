import VideoSJ from "./VideoSJ";
import VideoBNB from "./VideoBNB";
import "../styles/video-section.scss";
import React from "react";

function VideoSection() {
    const videoInfo = [
        {
            video: <VideoSJ />,
            caption: "Stoner Jam 2022"
        },
        {
            video:  <VideoBNB />,
            caption: "Bad News Blues"
        }
    ];
    const renderVideo = (video) => {
        return (
            <section className="main__videos-video">
                {video.video}
                <h4>{video.caption}</h4>
            </section>
        );
    };
    return (
        <>
            {videoInfo.map(renderVideo)}
        </>
    );
};

export default VideoSection
