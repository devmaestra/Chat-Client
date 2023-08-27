import React, { useEffect, useState } from 'react'
import RoomAdd from './RoomAdd';
import { Col, Container, Row } from 'reactstrap';
import RoomDisplay from './RoomDisplay';
import { baseURL } from '../../environments';

function RoomIndex(props) {

  const [ rooms, setRooms ] = useState([]);

  const fetchRooms = async () => {
      const url = `${baseURL}/room`;

      const requestOption = {
          method: 'GET',
          headers: new Headers({
              "Authorization": props.token
          })
      } 
      
      try {

          const res = await fetch(url, requestOption);
          const data = await res.json();

          setRooms(data.getAllRooms)
          
      } catch (err) {
          console.error(err.message)
      }
  }



useEffect(() => {
  if(props.token) {
      fetchRooms()
  }
}, [props.token])

return (
  <>
      <Container>
          <Row>
              <Col md="4">
                  <RoomAdd 
                      token={props.token}
                      fetchRooms={fetchRooms}
                  />
              </Col>
              <Col md="8" >
                  <RoomDisplay 
                  token={props.token}
                  rooms={rooms}
                  fetchRooms={fetchRooms} />
              </Col>
          </Row>
      </Container>
  </>
)
}

export default RoomIndex
