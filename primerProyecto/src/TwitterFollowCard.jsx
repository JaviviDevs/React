import { useState } from 'react'

export function TwitterFollowCard({userName,name,initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className="tw-followCard-avatar" alt="avatar" src={`https://unavatar.io/${userName}`}/>
                <section className='tw-followCard-info'>
                    <strong> {name}</strong>
                    <p  className='tw-followCard-infoUserName'>@{userName}</p>
                </section>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}