
//task

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  abrar: 100,
  Ariba: 160,
  sara: 130,
  dawood: 100,
  saba: 160,
  waqar: 130,
  abtrrar: 100,
  sanam: 160,
  nazia: 130
  }

  let sum = 0;
  for(let abrar in salaries){
  sum += salaries[abrar];
}
  document.write("The total sum of all saleries are: "+sum);