import Videos from "../movie_page_interfaces/Videos";

interface VideoTagProps {
    videos: Videos[] | undefined
}
export default function VideosTag(props: VideoTagProps) {
    return (
        <div className={'d-flex flex-column'}>
            {props.videos?.map((video: Videos, index) => {
                return (
                    <iframe className={'m-2 p-2'}
                            key={index}
                            title={video.name}
                            src={`https://www.youtube.com/embed/${video.key}`}
                            allow={'fullscreen'}
                            />
                )
            })}
        </div>
    )
}
