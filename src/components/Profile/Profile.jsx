import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const Profile = ({profile, setProfile, status, setStatus, isMyProfile, setPhoto}) =>
{
    return (
        <div className="content">
            <ProfilePhoto setPhoto={setPhoto} isMyProfile={isMyProfile} photos={profile.photos}/>
            <ProfileStatus status={status} setStatus={setStatus} isMyProfile={isMyProfile}/>
            <ProfileInfo isMyProfile={isMyProfile}
                         aboutMe={profile.aboutMe}
                         userID={profile.userId}
                         lookingForAJob={profile.lookingForAJob}
                         skills={profile.lookingForAJobDescription}
                         name={profile.fullName}
                         contacts={profile.contacts}
                         setProfile={setProfile}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;

/*
aboutMe: null
userId: required(integer)
lookingForAJob: required(boolean)
lookingForAJobDescription: required(string)
fullName: required(string)
contacts: {
	github: required(string)
	vk: required(string)
	facebook: required(string)
	instagram: required(string)
	twitter: required(string)
	website: required(string)
	youtube: required(string)
	mainLink: required(string)
}
photos: {
	small: null,
	large: null
}
*/