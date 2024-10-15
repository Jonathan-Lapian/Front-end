import { yearUntilRetirement } from "./nomor1.js";
import { addNumber } from "./nomor2.js";
import { area21, area7, calculateArea } from "./nomor3.js";
import { makeAjaxRequest } from "./nomor4.js";

//no 1
yearUntilRetirement({ year: 1987, firstName: "John" });
addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);
makeAjaxRequest("www.google.com");
