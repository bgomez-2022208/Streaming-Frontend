import { useEffect } from "react";
import { useParams  } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner"

export const Stream = ({streaUrl}) => {
    return(
        <div className="channel-video-container">
            <ReactFlvPlayer width='100%' heigth='100%' url={streamUrl}/>
        </div>
    )
}


export const ChannelView = ({getChannels}) => {
    const { isFetching, getChannelsDetails, channelDetails } = useChannelDetails()

    const { id } = useParams()

    useEffect(() =>{
        getChannelsDetails(id)
    }, [])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="channel-container">
            <div className="channel-video-description-section">
                {channelDetails.isOnline ? (
                    <Stream streamUrl={channelDetails.streamUrl}/>

                ) : (
                    <div className="channel-offline-placeholder">
                        <span>Channel is Offline !!!</span>
                    </div>
                )}
                <ChannelDescription 
                    channelId={channelDetails.data.id}
                    title={channelDetails.data.title}
                    description={channelDetails.data.description}
                    username={channelDetails.data.username}
                    getChannels={getChannels}
                />
            </div>
        </div>
    )
}