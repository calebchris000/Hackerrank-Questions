

function timeConversion(s) {

   let clockTime = 12;
   let matching = s.match(/[0-9PMAM:]/gi);
   let test = '';

   for (let i = 0; i < matching.length; i++) {
      test += matching[i];
   }

   //Check is AM or PM is present
   matching.splice(-2, 2);
   let dump = '';

   for (let i = 0; i < matching.length; i++) {
      dump += matching[i];

   }
   if (test.match('AM') == 'AM') {
      if(dump.match('12') == 12) {
      console.log(dump.replace('12', '00'));


   }
   else{
      console.log(dump)
   }

   
   }
   else {

      let array = [...matching];

      const a = array[0]; const b = array[1];


      let result = clockTime + (parseInt(a + b))
      let final = result.toString().split('');
      [c, d] = final;

      array.splice(0, 2, c, d);

      let comp = '';
      for (let i = 0; i < array.length; i++) {
         comp += array[i];

      }

      if (comp.match('24') == '24') {

         console.log(comp.replace('24', '12'));
      }

      else {
         console.log(comp)
      }
   }

}

timeConversion("04:59:59AM")