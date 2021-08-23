import './App.css';
import Navigation from './components/Navbar/Navigation';
import { Row, Col} from 'react-bootstrap';
import { Container} from 'react-bootstrap';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import legends from './Fake Data/player.json';
import { useEffect, useState } from 'react';
import Info from './components/Info/Info';


function App() {

  const [footballers,setfootballers]=useState([]);
  
  useEffect(()=>{
    
    setfootballers(legends);
    
  },[]);

  let newval=0;
  
  
  const [cart,setcart]=useState([]);
  const [playersalary,setplayersalary]=useState(0);
  const btn_handler=(product)=>{
    
    const newcart=[...cart,product];
    let intvalue=+product.salary.substring(1);
    console.log(intvalue);
    newval=playersalary+intvalue;
    console.log("Total sal",newval);
    setplayersalary(newval);
    console.log("Total salary is",playersalary);

    setcart(newcart);

    
    
  }
  
  return (
    <Container className="bg-light">
      <Header></Header>
      <Navigation></Navigation>

      <Row>
        
        <Col md="10">
          <Row>
          { 
            footballers.map(item=><Players p={item} key={item.id} btn_handler={btn_handler}></Players>)
          }
          </Row>
        </Col>
        
        <Col md="2" className="total_info">
             <Info carts={cart} key={cart.id} total={playersalary}></Info>
          <hr />
          
        </Col>
        
      </Row>
      
      
    </Container>
    
  );
}

export default App;
