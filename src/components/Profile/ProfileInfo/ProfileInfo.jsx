import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import css from "./ProfileInfo.module.css";
import React from "react";

const ProfileInfo = (props) => {
    return (
        <div className={'container'}>
            <Image src={props.profileW} fluid className={css.profileWallpaper}/>
            <Media className={css.profile}>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={props.profileImg}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>{props.profileT}</h5>
                    <p>
                        {props.profileDesc}
                    </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default ProfileInfo;