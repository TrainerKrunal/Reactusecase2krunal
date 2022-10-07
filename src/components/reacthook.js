
import {useState,Fragment} from 'react';


function CounterWithHooks(){

        //current value   function used to set new value    
           const [counterValue,setNewCounterValue] =   useState(0); //hook (defaul value)
           const [firstname,setNewFirstName] = useState("Krunal");

            const handleIncrement = () =>{
                setNewCounterValue(counterValue+1);
            }

            const handleDecrement = () => {
                setNewCounterValue(counterValue - 1);
            }

            const updateFirstName = () =>{
                setNewFirstName("SCB 2022 Induction");
            }

            return(
                <div>
                    <h3>Counter</h3>
                    <Fragment>
                        <button onClick={handleIncrement}>+Increment</button>
                        <button onClick={handleDecrement}>-Decrement</button>
                        <button onClick={updateFirstName}>Compnay Name</button>
                    </Fragment>
                    <Fragment>
                        <h4>Counter : {counterValue}</h4>
                        <h4>FirstName : {firstname}</h4>
                    </Fragment>
                </div>
            )

}

export default CounterWithHooks;