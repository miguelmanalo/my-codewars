const findFriend = foundFriend => foundFriend.length === 4;

function friend(friends){
  const friendAnswer = friends.filter(findFriend);
  return friendAnswer;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));
console.log(friend(["Love", "Your", "Face", "1"]));

// Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
// Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
// Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
// Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);