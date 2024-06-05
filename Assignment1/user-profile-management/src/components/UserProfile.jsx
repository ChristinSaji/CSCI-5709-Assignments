import React, { useState } from "react";
// Image source: https://openverse.org/image/98c1642b-9f86-49bc-b28c-fdb35adcba7b?q=professionals
// License: Creative Commons
import defaultProfilePic from "../assets/phil-rogers.png";

const UserProfile = ({ isEditing, onEdit, onSave, onCancel }) => {
  const [username, setUsername] = useState("philrogers");
  const [email, setEmail] = useState("philrogers@example.com");
  const [contactNumber, setContactNumber] = useState("(123) 456-7890");
  const [address, setAddress] = useState("1234 South St, Sydney");
  const [profilePicture, setProfilePicture] = useState(defaultProfilePic);
  const [tempProfilePicture, setTempProfilePicture] = useState(profilePicture);
  const [errors, setErrors] = useState({});

  // Code adapted from "Understanding Forms in React" by Twelve Hashnode
  // Source: https://twelve.hashnode.dev/understanding-forms-in-react
  // Modifications: Added custom validation rules for username, email, contact number, and address.
  const validateForm = () => {
    const newErrors = {};

    if (!username) newErrors.username = "Username is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!contactNumber) newErrors.contactNumber = "Contact number is required.";
    if (!address) newErrors.address = "Address is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setProfilePicture(tempProfilePicture);
    onSave({
      username,
      email,
      contactNumber,
      address,
      profilePicture: tempProfilePicture,
    });
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
    <div className="min-h-screen flex items-center justify-center bg-blue">
      <form
        onSubmit={handleSave}
        className="max-w-5xl mx-auto w-full p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-darkBlue text-5xl p-5 text-center font-medium">
          Profile Information
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img
              className="rounded-full w-64 h-64 object-cover mb-3"
              src={isEditing ? tempProfilePicture : profilePicture}
              alt="Profile"
            />
            {isEditing && (
              <div className="mt-2">
                <input
                  id="fileInput"
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={handlePictureChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("fileInput").click()}
                  className="bg-darkBlue text-white px-4 py-2 rounded"
                >
                  Choose File
                </button>
              </div>
            )}
          </div>
          <div className="w-full md:w-2/3 flex flex-col md:pl-8">
            <div className="mb-3">
              <label
                className="block text-darkBlue font-bold"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className={`w-full p-2 border ${
                  errors.username ? "border-red-500" : "border-darkBlue"
                } rounded bg-lightBlue text-darkBlue font-medium`}
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={!isEditing}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="block text-darkBlue font-bold" htmlFor="email">
                Email:
              </label>
              <input
                className={`w-full p-2 border ${
                  errors.email ? "border-red-500" : "border-darkBlue"
                } rounded bg-lightBlue text-darkBlue font-medium`}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!isEditing}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <label
                className="block text-darkBlue font-bold"
                htmlFor="contactNumber"
              >
                Contact Information:
              </label>
              <input
                className={`w-full p-2 border ${
                  errors.contactNumber ? "border-red-500" : "border-darkBlue"
                } rounded bg-lightBlue text-darkBlue font-medium`}
                type="text"
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                readOnly={!isEditing}
              />
              {errors.contactNumber && (
                <p className="text-red-500">{errors.contactNumber}</p>
              )}
            </div>
            <div className="mb-3">
              <label
                className="block text-darkBlue font-bold"
                htmlFor="address"
              >
                Address:
              </label>
              <input
                className={`w-full p-2 border ${
                  errors.address ? "border-red-500" : "border-darkBlue"
                } rounded bg-lightBlue text-darkBlue font-medium`}
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                readOnly={!isEditing}
              />
              {errors.address && (
                <p className="text-red-500">{errors.address}</p>
              )}
            </div>
            {isEditing ? (
              <div className="flex justify-start my-4">
                <button
                  className="w-1/2 bg-darkBlue text-white px-4 py-2 rounded mr-2"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="w-1/2 bg-gray-500 text-white px-4 py-2 rounded"
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="w-1/2 bg-darkBlue text-white px-4 py-2 rounded my-4"
                type="button"
                onClick={onEdit}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
