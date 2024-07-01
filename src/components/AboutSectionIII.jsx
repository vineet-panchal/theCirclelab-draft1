import aboutImg from '../../public/about-img.svg';
import '../css/AboutSectionIII.css';

const AboutSectionIII = () => {
  return (
    <div className="ASIII-ctr">
      <div className="ASIII-left-ctr">
        <p className="ASIII-description" id="paragraph-1">
          The CIRCLE lab refelcts the core value that care-centered pedagogies are 
          vital for fostering a holistic educational experience for ALL students. 
          Introducing a care-centric approach in Computer Science aims to nurture 
          not just the computational skills of budding computer scientists, but 
          also their emotional intelligence, empathy, and ethical reasoning.
        </p>
        <p className="ASIII-description" id="paragraph-2">
          At CIRCLE, we study the affordnaces and effectiveness of technologies that 
          foster care-centered approaches, continuously refining our methodologies 
          based on empirical data. We build integrative data analytics to understand 
          emotion, engagement, effort and enactments. We care about the larger 
          societal implications of Computer Science, from the biases in machine 
          learning models to the ethics of data privacy.
        </p>
      </div>
      <div className="ASIII-right-ctr">
        <img className="ASIII-img" src={aboutImg} alt="about-circle" />
      </div>
    </div>
  )
}

export default AboutSectionIII;