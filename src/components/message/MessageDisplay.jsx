import React from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../environments';
import Logout from '../auth/logout/Logout';
import FullButton from '../buttons/FullButton';

function MessageDisplay(props) {

  const navigate = useNavigate();

  async function deleteMessage(id) {
      const url = `${baseURL}/message/${id}`

      let requestOption = {
          headers: new Headers({
              'Authorization': props.token,
          }),
          method: 'DELETE'
      }

      try {

          let res = await fetch(url, requestOption);
          let data = await res.json();

          if(data) {
              props.fetchMessage();
          }

      } catch (err) {
          console.error(err.message);
      }
  }

return (
  <>
    <h1>List of Messages</h1>
    <Table striped hover bordered>
      <thead>
        <tr>
          <th>MESSAGE DATE</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {
          props.message.map(message => {
              return(
                  <tr key={message._id}>
                      <th scope='row'>{message.date}</th>
                      <td>{message.text}</td>
                      <td>
                          <Button
                              color='warning'
                              onClick={
                                  () => navigate(`/message/${message._id}`)
                              }
                          >Edit</Button>
                          <Button
                              onClick={() => deleteMessage(message._id)}
                              color='danger'
                              >Delete
                          </Button>
                      </td>
                  </tr>
              )
          })
        }
      </tbody>
    </Table>
    <FullButton>
      <Button
        onClick={'/'}        
        color='danger'
        outline
        >
          <Logout />Logout
      </Button>
    </FullButton>
  </>
);
}

export default MessageDisplay