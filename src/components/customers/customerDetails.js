 

function CustomerDetails(props){
    const customerdata = props.customer;

    return(
        <div className="container">
            <h3>Customer Details</h3>
            <hr/>
            <p>Id : {customerdata.id}</p>
            <p>FirstName : {customerdata.name}</p>
            <p>Account Type : {customerdata.accountType}</p>
            <p>Email : {customerdata.email}</p>
             <p>Contact: {customerdata.phone}</p> 
        </div>
    )

}

export default CustomerDetails;

 


