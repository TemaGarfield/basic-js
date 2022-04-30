const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */ members) {

  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  let membersString = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') membersString.push(members[i]);
  }

  if (membersString.length === 0) {
    return false;
  }

  for (let i = 0; i < membersString.length; i++) {
    membersString[i] = membersString[i].replace(/\s/g, '');
    membersString[i] = membersString[i].toUpperCase();
  }

  membersString.sort();
  let dreamTeam = '';
  for (let i = 0; i < membersString.length; i++) {
    dreamTeam += membersString[i][0];
  }

  return dreamTeam.toUpperCase();
}

console.log();

module.exports = {
  createDreamTeam
};
