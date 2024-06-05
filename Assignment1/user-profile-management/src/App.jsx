import React, { useState } from "react";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedProfile) => {
    console.log("Updated Profile:", updatedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <UserProfile
        isEditing={isEditing}
        onEdit={handleEdit}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;
