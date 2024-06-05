import React, { useState } from 'react';

const UserProfile = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [username, setUsername] = useState('philrogers');
  const [email, setEmail] = useState('philrogers@example.com');
  const [contactNumber, setContactNumber] = useState('(123) 456-7890');
  const [address, setAddress] = useState('1234 South St, Sydney');
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  const [tempProfilePicture, setTempProfilePicture] = useState(profilePicture);

  const handleSave = (e) => {
    e.preventDefault();
    setProfilePicture(tempProfilePicture);
    onSave({ username, email, contactNumber, address, profilePicture: tempProfilePicture });
  };

  const handleCancel = () => {
    setTempProfilePicture(profilePicture);
    onCancel();
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSave}>
      <h1>Profile Information</h1>
      <div>
        <img src={isEditing ? tempProfilePicture : profilePicture} alt="Profile" />
        {isEditing && (
          <div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePictureChange}
            />
          </div>
        )}
      </div>
      <div>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Contact Information:</label>
          <input 
            type="text" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label>Address:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            readOnly={!isEditing}
          />
        </div>
      </div>
      {isEditing ? (
        <div>
          <button type="submit">
            Save Changes
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button type="button" onClick={onEdit}>
          Edit Profile
        </button>
      )}
    </form>
  );
}

export default UserProfile;
