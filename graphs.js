let datatoGraf = [
    {
        "INCIDENT_YEAR" : 1990,
        "IncidentCount" : 2105
    },
    {
        "INCIDENT_YEAR" : 1991,
        "IncidentCount" : 2510
    },
    {
        "INCIDENT_YEAR" : 1992,
        "IncidentCount" : 2650
    },
    {
        "INCIDENT_YEAR" : 1993,
        "IncidentCount" : 2624
    },
    {
        "INCIDENT_YEAR" : 1994,
        "IncidentCount" : 2706
    },
    {
        "INCIDENT_YEAR" : 1995,
        "IncidentCount" : 2821
    },
    {
        "INCIDENT_YEAR" : 1996,
        "IncidentCount" : 3025
    },
    {
        "INCIDENT_YEAR" : 1997,
        "IncidentCount" : 3554
    },
    {
        "INCIDENT_YEAR" : 1998,
        "IncidentCount" : 3802
    },
    {
        "INCIDENT_YEAR" : 1999,
        "IncidentCount" : 5113
    },
    {
        "INCIDENT_YEAR" : 2000,
        "IncidentCount" : 6002
    },
    {
        "INCIDENT_YEAR" : 2001,
        "IncidentCount" : 5822
    },
    {
        "INCIDENT_YEAR" : 2002,
        "IncidentCount" : 6216
    },
    {
        "INCIDENT_YEAR" : 2003,
        "IncidentCount" : 5990
    },
    {
        "INCIDENT_YEAR" : 2004,
        "IncidentCount" : 6559
    },
    {
        "INCIDENT_YEAR" : 2005,
        "IncidentCount" : 7235
    },
    {
        "INCIDENT_YEAR" : 2006,
        "IncidentCount" : 7248
    },
    {
        "INCIDENT_YEAR" : 2007,
        "IncidentCount" : 7735
    },
    {
        "INCIDENT_YEAR" : 2008,
        "IncidentCount" : 7624
    },
    {
        "INCIDENT_YEAR" : 2009,
        "IncidentCount" : 9495
    },
    {
        "INCIDENT_YEAR" : 2010,
        "IncidentCount" : 9899
    },
    {
        "INCIDENT_YEAR" : 2011,
        "IncidentCount" : 10109
    },
    {
        "INCIDENT_YEAR" : 2012,
        "IncidentCount" : 10909
    },
    {
        "INCIDENT_YEAR" : 2013,
        "IncidentCount" : 11408
    },
    {
        "INCIDENT_YEAR" : 2014,
        "IncidentCount" : 13688
    },
    {
        "INCIDENT_YEAR" : 2015,
        "IncidentCount" : 13778
    },
    {
        "INCIDENT_YEAR" : 2016,
        "IncidentCount" : 13333
    },
    {
        "INCIDENT_YEAR" : 2017,
        "IncidentCount" : 14783
    },
    {
        "INCIDENT_YEAR" : 2018,
        "IncidentCount" : 16205
    },
    {
        "INCIDENT_YEAR" : 2019,
        "IncidentCount" : 17344
    },
    {
        "INCIDENT_YEAR" : 2020,
        "IncidentCount" : 11622
    },
    {
        "INCIDENT_YEAR" : 2021,
        "IncidentCount" : 15593
    },
    {
        "INCIDENT_YEAR" : 2022,
        "IncidentCount" : 8362
    }
]


const years = datatoGraf.map(entry => entry.INCIDENT_YEAR);
const incidentCounts = datatoGraf.map(entry => entry.IncidentCount);

const ctx = document.querySelector('#chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Incidents of bird strike from 1990 to 2022',
            data: incidentCounts,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    callback: function (value) {
                        if (Number.isInteger(value)) {
                            return value;
                        }
                    }
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total amount of incidents per year   ', // You can customize the label here
                },
                ticks: {
                    callback: function (value) {
                        if (Number.isInteger(value)) {
                            return value;
                        }
                    }
                }
            }
        }
    }


});