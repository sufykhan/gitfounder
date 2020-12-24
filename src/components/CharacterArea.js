import React from 'react'
import { Card, Col, Tab, Tabs } from 'react-bootstrap'
import { Link} from 'react-router-dom';

const CharacterArea = ({data}) => {
    const {login,id,avatar_url,name,hireable,type,created_at}=data;

    return (
        <Col md={4} sm={6} xs={12} key={id}>
          <Card style={{ width: "20rem",border:"none",background:"center"}}>
            <Card.Header style={{fontSize:"20px",color:"#ddd",fontWeight:"400"}}>{name ? name:"UserName"}</Card.Header>
            <Card.Body>
            <Link to={"/details/"+login}><Card.Img src={avatar_url} className="hoverArrow" ></Card.Img></Link>
              <hr/>
              <Tabs defaultActiveKey="status" id="uncontrolled-tab-example" style={{border:"none",placeContent:"center"}}>
                <Tab eventKey="UserId" title="UserId" style={{color:"black"}}>
                <br/>
                  <h3>{id}</h3>
                </Tab>
                <Tab eventKey="status" title="Hireable">
                <br/>
                  <h3>{hireable ? hireable:"No Data"}</h3>
                </Tab>
                <Tab eventKey="Type" title="Type">
                <br/>
                  <h3>{type ? type:"No Data"}</h3>
                </Tab>
                
              </Tabs>
            </Card.Body>
            <Card.Footer>{created_at}</Card.Footer>
          </Card>
        </Col>
    

    )
}

export default CharacterArea
