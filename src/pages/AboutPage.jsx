import PersonCard from "./PersonCard";
import photo from "../assets/zhuldyz.png";
import sebasPicture from "../assets/sebas.png";

const people = [
  {
    id: 1,
    name: "Zhuldyz Akhmetova",
    title: "Frontend Developer",
    bio: "Zhuldyz is a passionate frontend developer with a knack for creating engaging user experiences. She loves working with React and exploring new web technologies.",
    photo: photo,
  },
  {
    id: 2,
    name: "Sebastian Taraguay",
    title: "Backend Developer",
    bio: "Sebastian is a motivated and detail-oriented Full Stack developer with 3+ years of experience developing scalable applications with a strong foundation in HTML, CSS, Python, JavaScript, TypeScript, React and modern frameworks like Django",
    photo: sebasPicture,
  },
];
export function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This Application</h2>
      <p>
        This weather application allows users to search for the current weather conditions in different cities around the world.
        It fetches real-time data from a reliable weather API and displays it in an easy-to-read format.
      </p>
      <div className="about-app-content">
        <div className="about-app-card">
          <h3>Features:</h3>
          <ul>
            <li>Search for weather by city name.</li>
            <li>View current temperature, humidity, wind speed, and weather conditions.</li>
            <li>User-friendly interface with loading and error handling.</li>
          </ul>
        </div>
        <div className="about-app-card">
          <h3>Technologies Used:</h3>
          <ul>
            <li>React for building the user interface.</li>
            <li>Fetch API for making HTTP requests to the weather service.</li>
            <li>Context API for state management across components.</li>
          </ul>
        </div>
      </div>

      <section>
        <h2 className="team-title">Meet the Team</h2>
        <div className="people-grid">
          {people.map((p) => (
            <PersonCard key={p.id} photo={p.photo} name={p.name} title={p.title} bio={p.bio} />
          ))}
        </div>
      </section>
    </div>
  );
}
