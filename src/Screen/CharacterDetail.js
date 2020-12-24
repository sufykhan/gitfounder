import React, { useEffect, useState } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
const CharacterDetail = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const [datas, setData] = useState( (JSON.parse(localStorage.getItem("LocalStorageData")))||{});
  const [repo, setRepo] = useState( (JSON.parse(localStorage.getItem("LocalStorageRepo"))) || []);

useEffect(()=>{
  const fetchOne = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${id}`
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchOne()
},[id])

useEffect(()=>{
  const fetchRepo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${id}/repos`
      );
      localStorage.setItem("LocalStorageRepo",JSON.stringify(data))
      setRepo(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchRepo()
},[repo,id])
    

  const {login,name,hireable,url,bio,type,avatar_url}=datas;
  const headings=["Name","GitName","Type","Hireable","GitLink","Bio"]
  const headingData=[name?name:"No Data",login,type?type:"No Data",hireable?hireable:"No Data",url,bio?bio:"No Bio"]
  return (
    <div className="details" key={login}>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              src={avatar_url}
              style={{ objectFit: "contain" }}
            ></Card.Img>
          </Card>
        </Col>
        <Col md={6} className="text-align">
          <Card style={{width:"27rem",top:"2%",background:"center",border:"none"}}>
            <Card.Body>
            {headingData.map((val,index)=>(<Row>
                    <Col md={4}><Card.Title className="f-left">{headings[index]}:</Card.Title></Col>
                    <Col md={8} ><p className="f-right">{headingData[index]}</p></Col>
                </Row>))}
                
            </Card.Body>
          </Card>
          <Container style={{marginTop:"10%"}}>
      <h1>REPOSITORIES</h1>
      <hr/>
      <br/>
      {repo.map((re, index) => (
        <Card style={{background:"center",border:"none",margin:"10px 0px"}} >
          <Alert.Heading> {re.name}</Alert.Heading>
          <hr/>
          <Alert.Heading> {re.description}</Alert.Heading>
          <p>
            {re.owner.login}
            {re.html_url}
          </p>
        </Card>
      ))}
      </Container>
        </Col>
      </Row>
    </div>
  );
};

export default CharacterDetail;
