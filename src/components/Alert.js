
import { Button } from "@material-ui/core"
import {Save} from "@material-ui/icons";

export default function AlertFuncComp(){
    
    const showAlert = ()=>{
        alert("React is a great UI library")
    }
    
    return(
        <div>
            <Button type="submit" onClick={showAlert}
                    startIcon={<Save/>}
                     variant="contained"
                     color="secondary"
                     style={{
                        fontSize:20
                     }}>Submit</Button>
           
        </div>
    )
}