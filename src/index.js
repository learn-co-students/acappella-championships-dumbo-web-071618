document.addEventListener('DOMContentLoaded', init)

 function init() {
   fetch('http://localhost:3000/a_cappella_groups').then(r =>r.json()).then(json => showGroups(json))
 }

 function showGroups(groups) {

   groups.forEach(group => {
      let newCollege = document.createElement('p')
      let newName = document.createElement('p')
      let newMembership = document.createElement('p')
      let newDivision = document.createElement('p')
      let winButton = document.createElement('button')

      newCollege.innerHTML = group.college.name
      newCollege.dataset.columnId = group.id
      newName.innerHTML = group.name
      newMembership.innerHTML = group.membership
      newDivision.innerHTML = group.college.division
      winButton.innerHTML = 'Winner'

      var table = document.getElementById('table-body');
      var row = table.insertRow(0);
      row.dataset.rowId = group.id
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      cell1.innerHTML = newCollege.innerHTML;
      cell2.innerHTML = newName.innerHTML;
      cell3.innerHTML = newMembership.innerHTML;
      cell4.innerHTML = newDivision.innerHTML;
      cell5.id = 'buttonCell';

      let winButtonCell = document.querySelector('#buttonCell')
      winButtonCell
      winButton.dataset.buttonId = group.id
      winButtonCell.append(winButton)

      winButton.addEventListener('click', e => makeWinner(e.target))
   })
 }

function makeWinner(winningGroup){

  let winningColumn = document.querySelector(`[data-row-id='${winningGroup.dataset.buttonId}']`)

  let winnerBanner = document.querySelector('#winner')
debugger
  winnerBanner.innerHTML = 'Winner: '

  winningInfo = winningColumn.querySelectorAll('td')

  let newText = document.createTextNode(winningInfo[1].innerText);
  winnerBanner.append(newText)

winningColumn.parentNode.removeChild(winningColumn)
}

//I used this to create a copy of the 'winning cell' before appending it to winnerBanner:
  // winningInfo[1].cloneNode(true)


// My first attempt at populating the table:

// let collegeCol = document.querySelector('#collegeID')
// let nameCol = document.querySelector('#nameID')
// let membershipCol = document.querySelector('#membershipID')
// let divisionCol = document.querySelector('#divisionID')

// collegeCol.append(newCollege)
// nameCol.append(newName)
// membershipCol.append(newMembership)
// divisionCol.append(newDivision)
