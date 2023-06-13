fetch('https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff ')
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

            // kolmas
            const employmentCell = document.createElement('td');
            employmentCell.textContent = "populatio num";
            row.appendChild(employmentCell);

            // neljäs
            const empPerCell = document.createElement('td');
            empPerCell.textContent = "% calc func";
            row.appendChild(empPerCell);


            tbody.appendChild(row);
        }
        
    });


