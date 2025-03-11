import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, Button, TextField } from "@mui/material";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  background: #e0f7fa;
  border-radius: 15px;
  width: 80%;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #c8e6c9;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const RightSection = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff3cd;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Profile = ({ user }) => {
  const [goalWeight, setGoalWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [profileImage, setProfileImage] = useState(user?.img || "");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      <LeftSection>
        <Avatar src={profileImage} sx={{ width: 120, height: 120 }} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <h2>Welcome, {user?.name}</h2>
        <p>Height: {user?.height} cm</p>
        <p>Weight: {user?.weight} kg</p>
        <p>BMI: {user?.bmi}</p>
        <h3>Powerlifting Achievements</h3>
        <p>{user?.achievements || "No achievements yet"}</p>
      </LeftSection>
      
      <RightSection>
        <h3>Progress Tracking</h3>
        <TextField
          label="Target Weight (kg)"
          type="number"
          value={goalWeight}
          onChange={(e) => setGoalWeight(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Current Weight (kg)"
          type="number"
          value={currentWeight}
          onChange={(e) => setCurrentWeight(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Update Progress
        </Button>
      </RightSection>
    </ProfileContainer>
  );
};

export default Profile;
