import Card from '../components/context'
import bankImage from '../components/bank.png'
import '../App.css'

function Home(){
    return (
        <div className="centeredGrid">
        <div></div>
      <Card
        bgcolor="secondary"
        cardstyle="small"
        header="tHE gOoD bAnK"
        title="Welcome to the bank"
        text="You can move around using the navigation bar to peform your various banking needs. Also feel free to view the passwords and banking details of our other customers in the All Data tab!"
        body={(<img src={bankImage} className="img-fluid" alt="Responsive image"/>)}
      />   
      <div></div> 
      </div>
    );  
  }

export default Home;