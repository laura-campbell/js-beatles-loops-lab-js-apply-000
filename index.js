function theBeatlesPlay (musicians, instruments) {
  var arr = [];
  var str;
  var index;
  for (index=0; index < musicians.length; index++) {
    str = musicians[index] + ' plays ' + instruments[index];
    arr = arr + str;
  }
  return arr;
}