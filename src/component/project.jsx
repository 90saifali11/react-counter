function Project({imgSrc}){
    return (  <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          
          <p>Description of Project 1.</p>
          <p>Technologies: HTML, CSS, JavaScript</p>
          <a href="https://celebrated-puppy-8400b3.netlify.app/" target="_blank">
            View on GitHub
          </a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          
          <p>Description of Project 2.</p>
          <p>Technologies: HTML, CSS, JavaScript</p>
          <a href="https://cosmic-starlight-b4b37f.netlify.app/" target="_blank">
            View on GitHub
          </a>
        </div>
        {/* Add more projects as needed */}
      </section>)
}

export default Project