const sub = document.querySelector('.sub');
const val = document.querySelectorAll('.datas');
const dt = document.querySelectorAll('.data');
const show = document.querySelector('.showData');
const updt = document.querySelector('.updt');
const cod = document.querySelector('#cods');
sub.addEventListener('click', res);
function res()
{
  let obj;
  let valeInArray = [];
  for (let i = 0; i < val.length; i++)
  {if (val[i].value != '')
    {valeInArray.push(val[i].value);}
    else
    {alert('no data Entry');break; }
  }
  let sd = document.createElement('div');
  sd.setAttribute('class', 'all');
  let vals = [];
  let newVal = '';
  valeInArray.map((i, index) =>
  {
    let d = document.createElement('span');
    d.setAttribute('class', 'mydata');
    d.setAttribute('contenteditable', 'true');
    d.innerText = i;
    sd.appendChild(d);
    show.appendChild(sd);
    sd.addEventListener('mouseleave', function ()
    {
      i = d.textContent;
      if (i != '')
      {d.innerText = i;updt.innerHTML = "<h2 style='color: green'>Updateing</h2>";}
      else
      { sd.removeChild(d); if (d == ''){show.removeChild(sd); vals[index] = '';}}
      console.log(index);
      vals[index] = '';
      vals[index] = i;
      obj = {name: vals[0],age: vals[1],work: vals[2]};
      console.log(obj);
      if (obj.name == '' && obj.age == '' || obj.work == '')
      {updt.innerHTML = "<h2 style='color: red'>No Data</h2>"; cod.innerHTML = "<small>Loading...!</small>";}
      else{cod.innerHTML = JSON.stringify(obj); }
    });
  });
}