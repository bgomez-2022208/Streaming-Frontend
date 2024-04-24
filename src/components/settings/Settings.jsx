import { StreamKey } from "./StreamKey";
import { ChannelSettings } from "../channel/ChannelSettings";
import { useChannelSettings } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";

export const Settings = () => {
    const {channelSettings, isFetching, saveSettings} = useChannelSettings()
    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div className="settings-container">
            <span>Settings</span>
            <ChannelSettings settings={channelSettings} saveSettings={saveSettings}/>
            <StreamKey streamKey={channelSettings.streamKey}/>
        </div>
    )
}