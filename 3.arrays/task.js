function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
		return arr1.every((element, i) => element === arr2[i]);
	}
	return false;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(old => old.age).reduce((usAge, old, index, arr) => {
        usAge += old;
        if (index === arr.length - 1) {
            return usAge / arr.length;
        }
        return usAge;
      }, 0);
      return result;
}