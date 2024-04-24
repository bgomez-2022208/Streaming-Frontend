/* eslint-disable react/prop-types */

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/013/125/488/non_2x/default-avatar-profile-icon-social-media-user-sign-symbol-vector.jpg'

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-container">
            <img src={url ? url : imageUrl} width='100%' height='100%' alt="Default avatar" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}