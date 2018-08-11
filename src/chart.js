const Chart = require('chart.js');

const getColor = function(isActive, alpha = 1) {
    if (isActive) {
        return `rgba(54, 162, 235, ${alpha})`;
    }

    return `rgba(255, 99, 132, ${alpha})`;
};

const getLabel = function (el, ind, data) {
    const iks = new Date();

    iks.setHours(iks.getHours() - data.length + ind);
    iks.setMinutes(0);
    iks.setSeconds(0);
    iks.setMilliseconds(0);

    return iks.toString();
};

const createChart = function(container, data, isActive) {

  const ctx = container.getContext('2d');

  const borderColor = getColor(isActive);
  const backgroundColor = getColor(isActive, 0.5);

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(getLabel),
      datasets: [
        {
          data,
          borderWidth: 1,
          borderColor,
          backgroundColor
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{ticks: {display: false}}],
            yAxes: [{ticks: {beginAtZero: true}}]
        }
    }
  });
};

module.exports = createChart;

