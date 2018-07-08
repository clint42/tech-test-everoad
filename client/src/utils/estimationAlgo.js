import moment from 'moment';

const calculateDistance = (origin, destination, callback) => {
  const distanceMatrixService = new window.google.maps.DistanceMatrixService();
  const request = {
    origins: [origin.description],
    destinations: [destination.description],
    travelMode: 'DRIVING',
  }

  distanceMatrixService.getDistanceMatrix(request, (response, status) => {
    if (response && response.rows.length > 0 && response.rows[0].elements.length > 0) {
      const distance = response.rows[0].elements[0].distance.value;
      callback(distance)
    }
  });
}

export default (addresses, merchandise, pickup, callback) => {
  const a = merchandise.lengthInMeter * merchandise.widthInMeter * merchandise.quantity / 2.4;
  const b = merchandise.weightInTons / 1.84;
  const ldm = Math.max(a, b);
  const costPerKilometer = 10;
  calculateDistance(addresses.pickupAddress, addresses.deliveryAddress, (distance) => {
    const basePrice = ldm * (distance / 1000) * costPerKilometer
    const now = moment();
    const daysBeforePickup = pickup.startPickupDate.diff(now, 'days');
    const finalPrice = daysBeforePickup <= 5 ? basePrice * 1.2 : basePrice;
    callback(finalPrice);
  });
}