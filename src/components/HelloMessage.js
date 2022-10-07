
function HelloMessageComp(props){
    return(
        <div>
            <h1>Message from {props.name} : {props.message}</h1>
        </div>
    )
}

export default HelloMessageComp;