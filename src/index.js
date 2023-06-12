fetch('./001_11s5_2022m12.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const tbody = document.getElementById('data-output');

        const municipalities = data.dataset.dimension.Alue.category.label;
        const populations = data.dataset.value;
      
        for (let i = 0; i < Object.keys(municipalities).length; i++) {
            
            const municipality = Object.values(municipalities)[i];    
            const population = populations[i];

            const row = document.createElement('tr');

            const municipalityCell = document.createElement('td');
            municipalityCell.textContent = municipality;
            row.appendChild(municipalityCell);
            
            const populationCell = document.createElement('td');
            populationCell.textContent = population;
            row.appendChild(populationCell);

            tbody.appendChild(row);
        }
        
    });


