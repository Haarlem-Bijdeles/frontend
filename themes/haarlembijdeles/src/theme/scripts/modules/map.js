import settings from '../config';

const GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = settings.GOOGLE_MAPS_API;
GoogleMapsLoader.LANGUAGE = 'nl';
GoogleMapsLoader.VERSION = 'weekly';

GoogleMapsLoader.load((google) => {
  const map = new google.maps.Map(document.querySelector('.map'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infowindow = new google.maps.InfoWindow();
  const bounds = new window.google.maps.LatLngBounds();

  const icon = {
    url: `${window.site.theme_url}/assets/images/marker@2x.png`,
    size: new google.maps.Size(30, 30),
    scaledSize: new google.maps.Size(30, 30),
  };

  let marker;
  window.locations.forEach((location) => {
    const position = new google.maps.LatLng(location.latitude, location.longitude);

    marker = new google.maps.Marker({
      position,
      map,
      icon,
    });
    bounds.extend(position);

    google.maps.event.addListener(
      marker,
      'click',
      (markerEvent => () => {
        infowindow.setContent(
          `<strong>${location.street}</strong><br>${location.zipcode}, ${location.city}`,
        );
        infowindow.open(map, markerEvent);
      })(marker),
    );
  });

  // now fit the map to the newly inclusive bounds
  map.fitBounds(bounds);
});
