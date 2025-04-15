const projects = [
  {
    title: "Weather App",
    description: "A simple weather app using OpenWeatherMap API.",
    link: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Todo List",
    description: "A minimalist todo list built with vanilla JS.",
    link: "https://github.com/yourusername/todo-list"
  },
  // Add more projects here
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project';
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View on GitHub</a>
  `;
  container.appendChild(div);
});
