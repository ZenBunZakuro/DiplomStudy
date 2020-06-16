import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let profileDataElement = props.profilePage.profileData.map((data) => <ProfileInfo id={data.id}
                                                                                profileW={data.profileWallpaper}
                                                                                profileImg={data.profileImage}
                                                                                profileT={data.profileTitle}
                                                                                profileDesc={data.profileDescription}/>);

    return (
        <div>
            <h1>Мой профиль</h1>
            {profileDataElement}
        </div>
    )
}

export default Profile;