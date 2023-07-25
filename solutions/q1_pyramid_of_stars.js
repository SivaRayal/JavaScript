/* eslint-disable operator-assignment */
/* eslint-disable no-plusplus */
/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (size) => {
  // Write your code here
  let output = '';
  for (let currLine = 0; currLine < size; currLine++) {
    let cursor = '';
    let refCursor = currLine;
    do {
      cursor += ' ';
      refCursor++;
    } while (refCursor < size);
    let starsOut = '* ';
    for (let starCounter = 0; starCounter < currLine; starCounter++) {
      starsOut += '* ';
    }
    //console.log(cursor+starsOut);
    // document.write(cursor+starsOut);
    output += cursor + starsOut + ' ' + '\n';
  }
  return output;
};

// console.log(buildPyramid(5));

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
