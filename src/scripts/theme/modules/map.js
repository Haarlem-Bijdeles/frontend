window.initMap = () => {
  const bounds = new window.window.google.maps.LatLngBounds();

  const map = new window.google.maps.Map(document.getElementById('map'), {
    mapTypeId: window.google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new window.google.maps.InfoWindow();

  let marker;

  window.locations.forEach((location) => {
    const position = new window.google.maps.LatLng(location.latitude, location.longitude);

    marker = new window.google.maps.Marker({
      position,
      map,
      icon: `${site.theme_url}/assets/images/marker.png`,
    });
    bounds.extend(position);

    window.google.maps.event.addListener(marker, 'click', ((marker) => {
      return () => {
        infowindow.setContent(`<strong>${location.street}</strong><br>${location.zipcode} ${location.city}`);
        infowindow.open(map, marker);
      };
    })(marker));
  });

  // now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);

  // (optional) restore the zoom level after the map is done scaling
  const listener = window.google.maps.event.addListener(map, 'idle', () => {
    window.google.maps.event.removeListener(listener);
  });
};
