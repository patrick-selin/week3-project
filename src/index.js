fetch('./001_11s5_2022m12.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const tbody = document.getElementById('data-output');

        const municipalities = data.dataset.dimension.Alue.category.label;
        const populations = data.dataset.value;

        console.log(municipalities);
        console.log(populations);

        console.log(typeof municipalities)
      
        console.log(municipalities.length)
        
        for (let i = 0; i < Object.keys(municipalities).length; i++) {
            console.log("no")
            const municipality = municipalities[i];
            // console.log(municipality);
            console.log(Object.keys(municipalities));


            const population = populations[i];
            const row = document.createElement('tr');

            const municipalityCell = document.createElement('td');
            municipalityCell.textContent = municipality;
            row.appendChild(municipalityCell);
            console.log("no")

            const populationCell = document.createElement('td');
            populationCell.textContent = population;
            row.appendChild(populationCell);

            tbody.appendChild(row);
        }
        console.log("no")
        console.log(Object.keys(municipalities));
    });


