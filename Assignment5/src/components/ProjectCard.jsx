const ProjectCard = ({ title, description, isLive }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`project-badge ${isLive ? 'green' : 'red'}`}>
        {isLive ? 'Live' : 'In Development'}
      </span>
    </div>
  )
}

export default ProjectCard
