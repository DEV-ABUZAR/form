import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">
          <img src="./logo.png" width={150}></img>
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item className="pages">
        <Nav.Link eventKey="link-1" style={{ color: "gray" ,fontWeight:"600"  }}
   >
      <Link to='/'  style={{textDecoration:'none'}}
       onMouseEnter={(e) => e.target.style.color = "#2cb1bc"}
       onMouseLeave={(e) => e.target.style.color = "gray"}>
          Add Event
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="pages">
        <Nav.Link eventKey="link-2" style={{ color: "gray", fontWeight:"600" }}
   >
      <Link to='/jobs' style={{textDecoration:'none'}}
       onMouseEnter={(e) => e.target.style.color = "#2cb1bc"}
       onMouseLeave={(e) => e.target.style.color = "gray"}>
      All Events
      </Link>
         
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <img src='./logout.png'
          width={20}
            
          >
            
          </img>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>

  );
}

export default Navbar;
