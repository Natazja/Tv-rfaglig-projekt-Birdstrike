console.log(data);

// Sort the data array by INCIDENT_YEAR
data.sort((a, b) => a.INCIDENT_YEAR - b.INCIDENT_YEAR);

const incidentTableElement = document.getElementById('incidentTable');
const tableBody = document.createElement('tbody');


data.forEach(incident => {
    const row = document.createElement('tr');
    row.classList.add('incident-row'); // Add a class to the table row

    // Create table cells for each property
    const yearCell = document.createElement('td');
    yearCell.textContent = incident.INCIDENT_YEAR !== null ? incident.INCIDENT_YEAR : 'N/A';
    row.appendChild(yearCell);

    const timeCell = document.createElement('td');
    timeCell.textContent = incident.time !== null ? incident.time : 'N/A';
    row.appendChild(timeCell);

    const locationCell = document.createElement('td');
    locationCell.textContent = incident.location !== null ? incident.location : 'N/A';
    row.appendChild(locationCell);

    const speciesCell = document.createElement('td');
    speciesCell.textContent = incident.species !== null ? incident.species : 'N/A';
    row.appendChild(speciesCell);

    const fatalitiesCell = document.createElement('td');
    fatalitiesCell.textContent = incident.NR_FATALITIES !== null ? incident.NR_FATALITIES : 'N/A';
    row.appendChild(fatalitiesCell);

    // Append the row to the table body
    tableBody.appendChild(row);
});

incidentTableElement.appendChild(tableBody);