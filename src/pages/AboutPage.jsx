export function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This Application</h2>
      <p>
        This weather application allows users to search for the current weather conditions in different cities around the world. It fetches real-time data from a reliable weather API and displays it in an easy-to-read format.
      </p>
      <h3>Features:</h3>
      <ul>
        <li>Search for weather by city name.</li>
        <li>View current temperature, humidity, wind speed, and weather conditions.</li>
        <li>User-friendly interface with loading and error handling.</li>
      </ul>
      <h3>Technologies Used:</h3>
      <ul>
        <li>React for building the user interface.</li>
        <li>Fetch API for making HTTP requests to the weather service.</li>
        <li>Context API for state management across components.</li>
      </ul>
    </div>
  );
}