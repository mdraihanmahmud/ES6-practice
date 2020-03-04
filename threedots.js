//story about 3idoits

const ages = [12,15,18,16,14]
const ages2 = [17,20,22,25,23,21]
const ages3 = [23,25,27,24,26,22]
const allages = ages.concat(ages2).concat(ages3);
//console.log(allages);


 const ages = [12,15,18,16,14]
 const ages2 = [17,20,22,25,23,21]
 const ages3 = [23,25,27,24,26,22]
 const allages =[...ages,...ages2,...ages3];
 //console.log(allages);
 const business = 450;
 const minister = 350;
 const sochib = 250;
 const takapoisa = [450,350,250];
 //const maximum = Math.max(business,minister,sochib);
 const maximum = Math.max(...takapoisa);
 console.log(maximum);
 