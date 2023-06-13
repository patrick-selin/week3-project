let emp;

fetch('https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065 ')
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        // const tbody = document.getElementById('data-output');
        emp = data2.dataset.value;

        
    });


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

            const employmentCell = document.createElement('td');
            employmentCell.textContent = emp[i];
            row.appendChild(employmentCell);

            const empPerCell = document.createElement('td');
            let empPer = (emp[i] / populations[i]) * 100;
            empPerCell.textContent = empPer.toFixed(2);;
            row.appendChild(empPerCell);


            tbody.appendChild(row);
        }
        
    });

