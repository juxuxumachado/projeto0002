import Filho from "./Filho"
export default function Pai(){
    function conversaPai(param){
        console.log("Msg pro Pai")
    }
    return(
        <div>
            <Filho funcao={conversaPai} />
        </div>
    )

}