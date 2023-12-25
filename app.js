fetch('./jobs.json')  // Add the correct path to your JSON file
  .then(response => response.json())
  .then(data => {
    // Populate job cards with data
    const jobCardsContainer = document.getElementById('jobCardsContainer');
    data.jobs.forEach(job => {
      const card = createJobCard(job);
      jobCardsContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));

  
    // Function to create a Bootstrap card for a job
    function createJobCard(job) {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'col-sm-6');
  
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <p class="card-text">${job.description}</p>
            <p class="card-text"><strong>Location:</strong> ${job.location}</p>
            <p class="card-text"><strong>Salary:</strong> ${job.salary}</p>
            <p class="card-text"><strong>Contact:</strong> ${job.contact}</p>
          </div>
        </div>
      `;
  
      return card;
    }
  });
  