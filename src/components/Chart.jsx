import React from 'react';

const Chart = (props) => {
  fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=dog")
  .then(r=>r.json())
  .then(console.log)


  return <div>Chart</div>;
};

export default Chart;
