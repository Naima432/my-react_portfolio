import Project from "./Project";
//import storyGenerator from '../path/to/image'; // Ensure you import the image correctly

const projectList = [
  {
    id: 1,
    title: 'Todo App',
    tech: ['Kotlin', 'Android Studio', 'SQLite'],
    description:
      'Developed a Todo List application using Kotlin and Android Studio. Implemented features like task creation, editing, and deletion. Designed a simple and intuitive UI for managing daily tasks, and integrated SQLite for local data storage.',
    liveLink: '#',
    githubLink: '#',
  },
  
    {
      id: 2,
      title: 'Salon Scheduler APP',
      tech: ['Java', 'JavaFX', 'SQLite'],
      description:
        'Developed a user-friendly Salon Scheduler application using JavaFX, designed to manage appointments, client information, and services for a salon. Integrated SQLite for persistent data storage, handling client profiles and service records.',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Graph Analysis Project',
      tech: ['Java'],
      description:
        'Developed a comprehensive application in Java that manipulates and analyzes graph data structures. The project involved implementing various algorithms to solve problems related to graph traversal, minimum spanning trees, depth-first search classification, and solving the Traveling Salesman Problem (TSP) using different heuristic methods.',
      liveLink: '#',
      githubLink: '#',
    },
  
  
];

const Projects = () => {
  return (
    <section id="projects" className="divider">
      <h1>Highlighted Projects</h1>
      <div>
        {projectList.map((project, i) => (
          <Project key={project.id} data={project} reverse={i%2 === 0}/>
        ))}
      </div>
      <div>
        <br />
      <div>
       <a className="btn" href="#"> All Projects </a>
    </div>
      </div>
    </section>
  );
};

export default Projects;