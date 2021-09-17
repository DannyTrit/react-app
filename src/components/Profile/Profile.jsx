import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePhoto from "./ProfileInfo/ProfilePhoto";
import profileStyle from "./Profile.module.css"
import Preloader from "../common/Preloader/Preloader";

const Profile = ({profile, setProfile, status, setStatus, isMyProfile, setPhoto, isFetching}) =>
{
   if(isFetching)
      return <Preloader/>

    return (
      <div className={profileStyle.profilePageBody}>
         <div>
            <ProfilePhoto setPhoto={setPhoto} isMyProfile={isMyProfile} photos={profile.photos}/>
            {(status || isMyProfile) && <ProfileStatus status={status} setStatus={setStatus} isMyProfile={isMyProfile}/>}
         </div>
         <div>
            <ProfileInfo isMyProfile={isMyProfile}
                         aboutMe={profile.aboutMe}
                         userID={profile.userId}
                         lookingForAJob={profile.lookingForAJob}
                         skills={profile.lookingForAJobDescription}
                         name={profile.fullName}
                         contacts={profile.contacts}
                         setProfile={setProfile}
            />
            <MyPostsContainer isMyProfile={isMyProfile} />
         </div>
      </div>
    );
}

export default Profile;