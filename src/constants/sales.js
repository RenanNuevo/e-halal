const sales =  [
    {
      labels: ["Jan 01", "Jan 02","Jan 03", "Jan 04","Jan 05", "Jan 06","Jan 07", "Jan 08","Jan 09", "Jan 10"],
      data: [
        {
          values: shuffleArray([0, 10, 20, 30, 40, 50, 60, 70, 80, 30 ]),
        },
      ],
    },
];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return(arr);
}

export default sales;
