import { useState } from "react";
import { toast } from "react-hot-toast";
import { getChannelsDetails as getChannelsDetailsRequest } from "../../services";

export const useChannelDetails = () => {
    const [channelDetails, setChannelDetails] = useState()

    const getChannelsDetails = async (id) => {
        const responseData = await getChannelsDetailsRequest(id)

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error al cargar la informacion'
            )
        }
        setChannelDetails(responseData)
        
    }

    return{
        channelDetails,
        isFetching: !channelDetails,
        getChannelsDetails
    }
}