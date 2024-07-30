import { ProfileCard } from './ProfileCard';
import ExperienceList from './ExperienceList';
import IntroductionForm from './IntroductionForm';

function MyProfile() {
  return (
    <div className="MyProfile">
      <ProfileCard />
      <ExperienceList />
      <IntroductionForm/>
    </div>
  );
}

export default MyProfile;
