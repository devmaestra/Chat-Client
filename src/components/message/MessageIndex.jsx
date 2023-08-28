import React, { useEffect, useState } from 'react'
import MessageAdd from './MessageAdd';
import { Col, Container, Row } from 'reactstrap';
import MessageDisplay from './MessageDisplay';
import { baseURL } from '../../environments';

function MessageIndex(props) {

  const [ messages, setMessages ] = useState([]);

  const fetchMessages = async () => {
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

          setMessages(data.getAllMessages)
          
      } catch (err) {
          console.error(err.message)
      }
  }

useEffect(() => {
  if(props.token) {
      fetchMessages()
  }
}, [props.token])

return (
  <>
      <Container>
          <Row>
              <Col md="4">
                  <MessageAdd 
                      token={props.token}
                      fetchMessages={fetchMessages}
                  />
              </Col>
              <Col md="8" >
                  <MessageDisplay 
                  token={props.token}
                  messages={messages}
                  fetchMessages={fetchMessages} />
              </Col>
          </Row>
      </Container>
  </>
)
}

export default MessageIndex
