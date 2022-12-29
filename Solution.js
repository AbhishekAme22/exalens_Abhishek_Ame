function apartmentHunting(blocks, reqs) {
  // Initialize minimum distance to infinity and minimum index to -1
  let minDistance = Number.POSITIVE_INFINITY;
  let minIndex = -1;

  // Iterate through each block in the blocks list
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    // Initialize maximum distance to -1
    let maxDistance = -1;

    // Iterate through each requirement in the reqs list
    for (let j = 0; j < reqs.length; j++) {
      const req = reqs[j];

      // If the current block has the current requirement, set distance to 0
      let distance = block[req] ? 0 : Number.POSITIVE_INFINITY;

      // If the current block does not have the current requirement,
      // search for the next block that has it and set distance to the index of that block
      for (let k = i + 1; k < blocks.length; k++) {
        if (blocks[k][req]) {
          distance = k - i;
          break;
        }
      }

      // Update maximum distance if necessary
      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }

    // Update minimum distance and index if necessary
    if (maxDistance < minDistance) {
      minDistance = maxDistance;
      minIndex = i;
    }
  }

  // Return the minimum index 
  return minIndex+1; // return the block number
}

const blocks = [
  {
      gym: false,
      school: true,
      store: false,
  },
  {
      gym: true,
      school: false,
      store: false,
  },
  {
      gym: true,
      school: true,
      store: false,
  },
  {
      gym: false,
      school: true,
      store: false,
  },
  {
  gym: false,
  school: true,
  store: true,
  }
];
const reqs = ["gym", "school", "store"];

console.log(apartmentHunting(blocks, reqs));  // prints 3


// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;