import {TwitterFollowCard} from './TwitterFollowCard.jsx'
import './App.css'
export function App(){
    return(
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel" initialIsFollowing={true}/>
            <TwitterFollowCard userName="midudev" name="Miguel" initialIsFollowing={false}/>
        </section>
    )
}