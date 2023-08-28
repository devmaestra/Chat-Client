import React from 'react';
import { Table, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../environments';
import Logout from '../auth/logout/Logout';
import FullButton from '../buttons/FullButton';

function RoomDisplay(props) {

    const navigate = useNavigate();

    async function deleteRoom(id) {
        const url = `${baseURL}/room/${id}`

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
                props.fetchRooms();
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1>List of Rooms</h1>
            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>ROOM TITLE</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.rooms.map(room => {
                            return (
                                <tr key={room._id}>
                                    <th scope='row'>{room.title}</th>
                                    <td>{room.description}</td>
                                    <td>
                                        <Button
                                            color='warning'
                                            onClick={
                                                () => navigate(`/room/update/${room._id}`)
                                            }
                                        >Edit</Button>
                                        <Button
                                            onClick={() => deleteRoom(room._id)}
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

export default RoomDisplay