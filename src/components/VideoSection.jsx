import VideoSJ from "./VideoSJ";
import VideoBNB from "./VideoBNB";
import "../styles/video-section.scss";

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
            <div className="main__videos-video">
                {video.video}
                <h4>{video.caption}</h4>
            </div>
        );
    };
    return (
        <>
            {videoInfo.map(renderVideo)}
        </>
    );
};

export default VideoSection
