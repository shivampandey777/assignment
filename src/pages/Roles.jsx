import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button } from "@mui/material";

function Roles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/roles").then((response) => {
      setRoles(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/roles/${id}`).then(() => {
      setRoles(roles.filter((role) => role.id !== id));
    });
  };

  return (
    <div>
      <h1>Roles</h1>
      {roles.map((role) => (
        <Card key={role.id} style={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h5">{role.name}</Typography>
            <Typography>{role.permissions.join(", ")}</Typography>
            <Button onClick={() => handleDelete(role.id)} color="error">
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Roles;