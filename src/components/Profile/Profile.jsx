import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profile = ({profile, setProfile}) =>
{
    return(
        <div className="content">
           {/*<ProfileStatus/>*/}
            <ProfileInfo aboutMe={profile.aboutMe}
                         userID={profile.userId}
                         lookingForAJob={profile.lookingForAJob}
                         skills={profile.lookingForAJobDescription}
                         name={profile.fullName}
                         contacts={profile.contacts}
                         photos={profile.photos}
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