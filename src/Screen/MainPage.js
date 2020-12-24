import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Alert,
  Col,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import CharacterArea from "../components/CharacterArea";

const MainPage = () => {
 
  const [datas, setData] = useState( (JSON.parse(localStorage.getItem("LocalStorageData"))) || {});
  const [search,setSearch]=useState("")
  useEffect(()=>{
    localStorage.setItem("LocalStorageData",JSON.stringify(datas))
  },[datas])

useEffect(()=>{
  const fetchAll = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchAll(search)
},[search,datas])


  const mainPageItem = () => {
    return <CharacterArea data={datas} />
  };

  return (
    <div  className="main">
    <></>
    <br/>
      <Row className="m-auto py-2" style={{positon:"fixed",zIndex:"4",width:"100%"}}>
      <Col md={2}></Col>
        <Col md={8}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search the User"
              value={search}
              onChange={(e) => {
             setSearch(e.target.value);
              }}
            />
            
          </InputGroup>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Row className="text-align py-3" style={{justifyContent: "center"}}>{datas==={}?<Alert variant="warning">Search the User</Alert>:mainPageItem()}</Row>

      
    </div>
  );
};

export default MainPage;
