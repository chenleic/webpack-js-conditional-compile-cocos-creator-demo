

function getString() {

    var a = "hello world";
  
    /* IFTRUE_apple */
    a += " i am apple";
   /* FITRUE_apple */

    /* IFTRUE_oppo */
    a += " i am oppo";
    /* FITRUE_oppo */

    return a;
}

module.exports = {getString:getString}