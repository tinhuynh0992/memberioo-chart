/*
* @brief: Today: the X property will be hour in 24 system. 
* so it will be numerical value from 00:00 to 24:00 at current date
*/
function arrangeDataForToday(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  for (let i = 0; i < 24; i++) {
    v1 = data.filter(row => {
      return (String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()) &&
        (moment(row.Date).format('H') === String(i))
      ; 
    }).length;

    v2 = data.filter(row => {
      return (String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()) &&
        (moment(row.Date).format('H') === String(i))
      ; 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "hour").format("HH:mm"),
      v1: v1,
      v2: v2
    })
  }

  return arrangedData;
}
/*
* @brief: Yesterday: the X property will be hour in 24 system.
* so it will be numerical value from 00:00 to 24:00 at yesterday date
*/
function arrangeDataForYesterday(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  for (let i = 0; i < 24; i++) {
    v1 = data.filter(row => {
      return (String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()) &&
        (moment(row.Date).format('H') === String(i))
      ; 
    }).length;

    v2 = data.filter(row => {
      return (String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()) &&
        (moment(row.Date).format('H') === String(i))
      ; 
    }).length;

    arrangedData.push({
      time: '',
      v1: v1,
      v2: v2
    })
  }

  return arrangedData;
}