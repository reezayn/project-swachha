
function VideoPlayer(props) {
    console.log("https://5543-34-80-48-109.ngrok.io/video/" + props.url)
    return (
        <div className="flex justify-center">


            {/* <video controls autoPlay width="50%" className="mt-10">
                <source src="http://127.0.0.1:5000/video" type="video/mp4" />
                Processing
            </video> */}
            <img src={"http://127.0.0.1:4000/testurl/" + props.url} className="mt-10" width="50%" />
        </div>
    )
}

export default VideoPlayer;