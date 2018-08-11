const loadDetails = function(id) {
  return fetch(`/api/stations/${id}`).then((response) => response.json());
};

module.exports = loadDetails;
