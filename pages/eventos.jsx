function acao1(){
    console.log("Ação1")
}

export default function init(){
function acao2(){
    console.log("Acão 2")
}
function acao5(e){
    console.log(e)
}

    return(
        <div>
            <button onClick={acao1}>Clique 1</button>
            <button onClick={acao2}>Clique 2</button>
            <button onClick={function(){
                console.log("Ação 3")
            }}>Clique 3</button>
            <button onClick={()=>console.log("Ação 4")}>Clique 4</button> 
            <button onClick={acao5}>Clique 5</button>
            <button onClick={e=>acao5(e)}>Clique 5 v2</button>
            <div>
                <input type="text" onChange={e=>console.log(e.target.value)}/>
            </div>
            
        </div>
    )
}