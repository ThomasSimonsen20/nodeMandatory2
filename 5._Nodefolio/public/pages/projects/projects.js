fetch("/api/projects")
.then(response => response.json())
.then(( projects ) => { 
    const projectWrapper = document.getElementById('projects-wrapper')

    projects.map(project => {
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project-container")
        projectDiv.innerHTML = `
        <div class="project-card">
            <div class="project-card-headline">
                <h3 class="projectName">${escapeHTML(project.name)}</h3>
            </div>
            <p class="projectCategory">Category: ${escapeHTML(project.category)}</p>
            <p class="projectLanguage">Language: ${escapeHTML(project.language)}</p>
            <p class="projectTechnologies">Technologies: ${escapeHTML(project.technologies)}</p>
            <p class="ProjectGithubLink">Github: ${escapeHTML(project.githubLink)}</p>
        </div>
        `

        projectWrapper.appendChild(projectDiv)

    })
})

