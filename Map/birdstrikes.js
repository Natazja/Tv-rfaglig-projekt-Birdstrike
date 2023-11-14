const birdStrikes = {
    Sheet1:

    const birdStrikesLatLng = birdStrikes.Sheet1.map((strikes) => {
        const latLngString = strikes["lat, lng"];

        const latLngArray = latLngString.split(", ");

        return {
            lat: parseFloat(latLngArray[0]),
            lng: parseFloat(latLngArray[1]),
        };
    });

    console.log(birdStrikesLatLng);