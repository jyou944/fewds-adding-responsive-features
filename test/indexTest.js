require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe('styling', () => {

  describe('within index.html', () => {

    it('contains a <link> tag', () => {
      const link = document.querySelectorAll('link')[0];
      expect(link).to.not.be.null;
    });
  });

  describe('within style.css', () => {
    it('looks like the finished product', () => {
      // set this to true once your CSS looks like the solution displayed in the readme!
      const myCssLooksLikeTheSolutionImage = true;
      expect(myCssLooksLikeTheSolutionImage).to.be.true;
    });
  });

});
