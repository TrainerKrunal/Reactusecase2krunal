
import {Fragment} from 'react'

function Person(props){
    return(
        <Fragment>
            <p onClick={props.SweeHong}>I am a {props.name} and I am {props.age} years old !!!</p>
            <p>{props.children}</p>
        </Fragment>
    )
}

export default Person