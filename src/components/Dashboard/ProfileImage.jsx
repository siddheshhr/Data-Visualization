import React from "react";
import styles from "./ProfileImage.css?inline"

const ProfileImage = ({ name }) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
  const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <span className={styles["user-profile-image"]}> {/* Use styles object to access CSS classes */}
      {firstNameInitial}
      {lastNameInitial}
    </span>
  );
};
export default ProfileImage;
