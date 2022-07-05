import React from "react";
import { UserContext } from '../components/context'
import Card from '../components/context'
import '../App.css'

function Login(){
    const ctx = React.useContext(UserContext);
    console.log("Current User " + ctx.currentUserIndex)
    
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [enable, setEnable]     = React.useState(false);
    //checks if a user is logged in currently, this impacts whether users can see the login card or not
    const [show, setShow]         = React.useState(() => {
        if (ctx.currentUserIndex === null) {
            return true;
        } else {
            return false;
        }
    });

    function handleSubmit() {
        let search = "";
        for (let i=0; i < ctx.users.length; i++) {
            if (ctx.users[i].email === email) {
                if (ctx.users[i].password === password) {
                    search = ctx.users[i]
                    ctx.currentUserIndex = i;
                    console.log("Current User " + ctx.currentUserIndex)
                    console.log(ctx.users[ctx.currentUserIndex])
                    setStatus("");
                    setShow(false);
                } else {
                    setStatus("Incorrect Password");
                    setEnable(false);
                    return;
                }
            }
        }
        if (search === "") {
            setStatus("No such username found")
            setEnable(false);
            return;
        }
    }

    function logOut() {
        ctx.currentUserIndex = null;
        setEmail('');
        setPassword('');
        setShow(true);
        setEnable(false);
    }

    function makeChange(e, field){
        if (field === "email"){
            setEmail(e.currentTarget.value)
            setEnable(true);
        }
        if (field === "password"){
            setPassword(e.currentTarget.value)
            setEnable(true);
        }
    }
    
    return (
        <div className="centeredGrid">
        <div></div>
        <Card
          bgcolor="secondary"
          cardstyle="small"
          header="Login"
          status={status}
          body={show ? (  
                  <>
                  Email address<br/>
                  <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => makeChange(e, "email")}/><br/>
                  Password<br/>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => makeChange(e, "password")}/><br/>
                  <button type="submit" disabled={!enable} className="btn btn-light" onClick={handleSubmit}>Login</button>
                  </>
                ):(
                  <>
                  <h5>Welcome {ctx.users[ctx.currentUserIndex].name}</h5>
                  <button type="submit" className="btn btn-light" onClick={logOut}>LogOut</button>
                  </>
                )}
        />
        <div></div>
        </div>
      )
  }

export default Login;