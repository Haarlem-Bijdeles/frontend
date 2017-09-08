window.initMap = () => {

  const map = new window.google.maps.Map(document.getElementById('map'), {
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new window.google.maps.InfoWindow();
  const bounds = new window.window.google.maps.LatLngBounds();

  const icon = {
    url: `${site.theme_url}/assets/images/marker.png`,
    size: new google.maps.Size(30, 30),
    scaledSize: new google.maps.Size(30, 30),
  };

  let marker;
  window.locations.forEach((location) => {
    const position = new window.google.maps.LatLng(location.latitude, location.longitude);

    marker = new window.google.maps.Marker({
      position,
      map,
      icon,
    });
    bounds.extend(position);

    window.google.maps.event.addListener(marker, 'click', ((marker) => {
      return () => {
        infowindow.setContent(`<strong>${location.street}</strong><br>${location.zipcode}, ${location.city}`);
        infowindow.open(map, marker);
      };
    })(marker));
  });

  // now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);
};
