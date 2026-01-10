import GameHeader from 


function App (){
    return (<>
    <GameHeader/>
    </>)
}

export default App



export const GameHeader = () => {
return (
<div>
<h1>Memory game</h1>
</div>

)
}

OR


export default function GameHeader () {
    return  (
<div>
<h1>Memory game</h1>
</div>

    )
}
