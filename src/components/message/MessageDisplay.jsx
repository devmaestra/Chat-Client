import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../environments';

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

            if (data) {
                props.fetchMessages();
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <Button
                color='warning'
                onClick={
                    () => navigate(`/message/update/${message._id}`)
                }
            >Edit</Button>
            <Button
                onClick={() => deleteMessage(message._id)}
                color='danger'
            >Delete
            </Button>
        </>
    );
}

export default MessageDisplay