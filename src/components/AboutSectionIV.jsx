import TeamCard from './TeamCard';
import '../css/AboutSectionIV.css';
import defaultpfp from '../assets/default-pf.jpg';

const AboutSectionIV = () => {
  return (
    <>
      <div className="ASIV-ctr">
        <div className="ASIV-title-content">
          <h3 className="ASIV-title">
            <span>Meet Our Team</span>
          </h3>
        </div>
        <div className="members-ctr">
          <TeamCard img={defaultpfp} name="Person 1" title="Person 1's Title" />
          <TeamCard img={defaultpfp} name="Person 2" title="Person 2's Title" />
          <TeamCard img={defaultpfp} name="Person 3" title="Person 3's Title" />
          <TeamCard img={defaultpfp} name="Person 4" title="Person 4's Title" />
          <TeamCard img={defaultpfp} name="Person 5" title="Person 5's Title" />
          <TeamCard img={defaultpfp} name="Person 6" title="Person 6's Title" />
          <TeamCard img={defaultpfp} name="Person 7" title="Person 7's Title" />
          <TeamCard img={defaultpfp} name="Person 8" title="Person 8's Title" />
          <TeamCard img={defaultpfp} name="Person 9" title="Person 9's Title" />
          <TeamCard img={defaultpfp} name="Person 10" title="Person 10's Title" />
        </div>
      </div>
    </>
  )
}

export default AboutSectionIV;