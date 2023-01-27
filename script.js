
let flags = [`Tahniah BaseTee, ini flags anda..`,`Y3Rme19TZWVmdXJ1S3VuX3dpbm5lcl99`]

let permissions = function(state){// state : 'granted' || 'prompt' || 'denied'
  let txt = state == 2 ? `Access Granted` : `Access Denied`;
  console.log(txt)
}

let library = [`521:521`,`738:740`,`740:741`,`631:846`,`640:771`,`725:760`,`668:482`,`627:629`,`690:699`,`226:226`,`750:885`,`545:658`,`686:826`,`678:874`,`726:855`]
// dalam library ni semuanya kod-kod dummy, selitkan satu kod yg betul utk validate

let integr = function(init){
  const s0 = init; let n0 = 0; for (let i0 in s0){
    n1 = s0[i0].codePointAt(0); n2 = Number(n1); n0 = n0 + n2;
  }; return n0; // str to num..
};

let checkr = function(txt1,txt2){
  let x = integr(txt1); let y = integr(txt2); let z = `${x}:${y}`
  if(library.indexOf(`${z}`) !== -1){ ss = z;} else {ss = z;}
  return ss
};

let result = function(init){
//prompt(flags[0], btoa(flags[1]))
  prompt(flags[0], atob(flags[1]))
}

let valida = function(init){
  let usern = document.getElementById(`usern`); let passw = document.getElementById(`passw`);
  let cdata = checkr(usern.value,passw.value);

  if (init == 0){
    prompt(`some TEXT HERE`,`bla.bla.bla`);
  }
  if (init == 1){
    switch (cdata){
      case `521:521`: // << EDIT yg INI..!! kod baru utk value yg betul letakkan disini dan selitkan juga dekat library
      permissions(2); usern.value = ``; passw.value = ``; let bypass = result(cdata);
      break; case `0:0`:
      permissions(1); usern.value = ``; passw.value = ``; usern.focus();
      break; default:
      permissions(0); usern.value = ``; passw.value = ``; usern.focus();
    }
  }
  if (init == 2){
    prompt(`Ini kod untuk username:password yg akan digunakan.. sila copy dan letakkan dalam function`,cdata)
  }
}

