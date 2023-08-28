import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

function RoomAdd(props) {

    const navigate = useNavigate();
    
  return (
    <>
      <Button type='submit' onClick={() => navigate('/')}>Add</Button>
    </>
  );
}

export default MessageAdd;
