let map;

function initMap() {
  let mapMarker = null;
  const defaultPosition = { lat: 40.4167278, lng: -3.7033387 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultPosition,
    zoom: 15,
  });

  const markers = userLocations.map((user) => {
    let icon = {
      url: user.userPicture, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };

    let shape = {
      coords: [25, 25, 25],
      type: 'circle'
    };

    return new google.maps.Marker({
      position: { lat: user.coordinates[1], lng: user.coordinates[0] },
      label: user.username,
      icon: icon,
      shape: shape,
      map: map
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}