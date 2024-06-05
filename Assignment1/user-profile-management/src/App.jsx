import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedProfile) => {
    console.log("Updated Profile:", updatedProfile);
    setIsEditing(false);
    toast.success("Profile successfully updated");
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <ToastContainer />
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
