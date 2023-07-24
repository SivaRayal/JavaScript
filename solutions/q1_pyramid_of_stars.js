/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (size) => {
	// Write your code here
     var output="";
     for(var currLine=0;currLine<size;currLine++){
          var cursor="";
          var refCursor=currLine;
         do{
          cursor+=" ";
          refCursor++;
         } while(refCursor<size)
         var starsOut="* ";
         for (var starCounter=0;starCounter<currLine;starCounter++){
          starsOut+="* ";
         }
         //console.log(cursor+starsOut);
          // document.write(cursor+starsOut);
          output+=cursor+starsOut+" "+"\n";
     }
     return output;
};

console.log(buildPyramid(5));

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
