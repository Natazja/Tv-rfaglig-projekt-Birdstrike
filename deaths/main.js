console.log(data);

// Sort the data array by INCIDENT_YEAR
data.sort((a, b) => a.INCIDENT_YEAR - b.INCIDENT_YEAR);

// Now, you can use the 'data' variable directly
const incidentListElement = document.getElementById('incidentList');

data.forEach(incident => {
    const listItem = document.createElement('li');
    listItem.textContent = `${incident.INCIDENT_YEAR} - ${incident.time}, ;Location: ${incident.location}, Species: ${incident.species}, Fatalities: ${incident.NR_FATALITIES}`;
    incidentListElement.appendChild(listItem);
});