import React from 'react';
import { UserContext } from "../components/context";
import Card from "../components/context"
import '../App.css'

function AllData(){
    const ctx = React.useContext(UserContext);
    console.log(ctx);
    return (
        <div className="alldataMYGEE">
        <Card
          bgcolor="secondary"
          cardstyle="big"
          header="All Data"
          width="50rem"
          body={
            <>
          <div className="alldata">
              <div className="offset"><h5>Name</h5></div>
              <div><h5>Email</h5></div>
              <div><h5>Password</h5></div>
              <div><h5>Transactions</h5></div>
          </div>
          {ctx.users.map((user, index) => {
            return (
                <div className="alldata data-item" key={index}>
                    <div className="offset padded">{user.name}</div>
                    <div className="padded">{user.email}</div>
                    <div className="padded">{user.password}</div>
                    <div className="padded">
                    <div className="alldata">
                                    <div className="thick">Balance</div>
                                    <div className="thick">Action</div>
                                    <div className="thick">Amount</div>
                                    <div className="thick">Timestamp</div>
                                    </div>
                        {user.history.map((iter, index) => {
                            return(
                            <div className="alldata data-item" key={index}>
                                <div className="padded">${iter.balance}</div>
                                <div className="padded">{iter.action}</div>
                                <div className="padded">${iter.amount}</div>
                                <div className="padded">{iter.eventDate}</div>
                            </div>
                            )
                        })
                        
                    }
                    
                    </div>
                </div>
            )
        }

                    )}
          </>}
        />  
        </div>  
      );  
  }

export default AllData;