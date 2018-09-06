const API = "http://localhost:3000/a_cappella_groups";

document.addEventListener('DOMContentLoaded', () => {
  const cappellaTable = document.querySelector("#table-body");
  fetch(API)
  .then(res => res.json())
  .then(aCapellas => {
    aCapellas.forEach(aCappellasData => {
      cappellaTable.append(renderAcappella(aCappellasData))
    })
  });

  document.addEventListener('click', (event) => {
    if (event.target.tagName === "IMG"){
      const winner = document.querySelector("#winner");
      //console.log(winner.contains("<span></span>"));

      let tableElements = event.target.parentNode.parentNode;
      //console.log(tableElements)
      toggle(tableElements)
      let tableRow = tableElements.querySelectorAll("td")[1];
      let winnerSpan = document.createElement('span');
      winnerSpan.innerText = tableRow.innerText;
      winner.append(winnerSpan);
      tableElements.remove();

      //console.log(event.target.dataset.id);

    }
  })
})
function toggle(element) {
 if( element.style.display==='none' ){
   element.style.display = '';
   console.log(element);
 }else{
   element.style.display = 'none';
   console.log(element);

 }
}

function renderAcappella(aCappellasData){
  let row = document.createElement('tr');
  //*Insert College*
  //*Insert Group Name*
  //*Insert Membership*
  //*Insert Division*
  row.innerHTML = `
    <td>${aCappellasData.college.name}</td>
    <td>${aCappellasData.name}</td>
    <td>${aCappellasData.membership}</td>
    <td>${aCappellasData.college.division}</td>
    <td>
      <img src='./assets/trophy.png' data-id=${aCappellasData.id}/>
    </td>
  `;

  return row;
}
