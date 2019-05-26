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
      time: moment(timeFilter.from).add(i, "hour").format("YYYY-MM-DD HH:mm"),
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
      time: moment(timeFilter.from).add(i, "hour").format("YYYY-MM-DD HH:mm"),
      v1: v1,
      v2: v2
    })
  }

  return arrangedData;
}

/*
* @brief: This week: the X property will be day name starting from Monday to Sunday. 
* You can use 3 letter for day name such as Mon, Tue, Wed, Thu etc.. 
* This data starting from current week based on today date.
*/
function arrangeDataForThisWeek(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("d")
          === moment(timeFilter.from).add(i, "day").format("d")
        )
      ); 
    }).length;

    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("d")
          === moment(timeFilter.from).add(i, "day").format("d")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "day").format("YYYY-MM-DD HH:mm"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilter.from).add(i, "day") <= moment(timeFilter.to));

  return arrangedData;
}

/*
* @brief: Last week: Almost similar like "This Week". 
* But using date from previous week starting from Monday.
*/
function arrangeDataForLastWeek(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("d")
          === moment(timeFilter.from).add(i, "day").format("d")
        )
      ); 
    }).length;

    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("d")
          === moment(timeFilter.from).add(i, "day").format("d")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "day").format("YYYY-MM-DD HH:mm"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilter.from).add(i, "day") <= moment(timeFilter.to));

  return arrangedData;
}

/*
* @brief: This month: the X property will be date in the month starting from 1 to 30 
* (depend on which Month) based on current date
*/
function arrangeDataForThisMonth(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("D")
          === moment(timeFilter.from).add(i, "day").format("D")
        )
      ); 
    }).length;

    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("D")
          === moment(timeFilter.from).add(i, "day").format("D")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "day").format("YYYY-MM-DD"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilter.from).add(i, "day") <= moment(timeFilter.to));

  return arrangedData;
}

/*
* @brief: Last month: almost similar like This month, but using previous month data.
*/
function arrangeDataForLastMonth(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("D")
          === moment(timeFilter.from).add(i, "day").format("D")
        )
      ); 
    }).length;

    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("D")
          === moment(timeFilter.from).add(i, "day").format("D")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "day").format("YYYY-MM-DD"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilter.from).add(i, "day") <= moment(timeFilter.to));

  return arrangedData;
}

/*
* @brief: All Time: the X property will be month name. and it will populate whole data
*/
function findMinDate(list) {
  return list.reduce(function (result, date) {
    return moment(date) < moment(result) ? date : result;
  }, moment().format("YYYY-MM-DD"));
}
function findMaxDate(list) {
  return list.reduce(function (result, date) {
    return moment(date) > moment(result) ? date : result;
  }, "2019-01-01");
}
function arrangeDataForAllTime(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  let timeFilterFrom = findMinDate(data.map(function(row) {
    return row.Date;
  }));
  let timeFilterTo = findMaxDate(data.map(function(row) {
    return row.Date;
  }));
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("YYYY-MM")
          === moment(timeFilterFrom).add(i, "months").format("YYYY-MM")
        )
      ); 
    }).length;
    
    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("YYYY-MM")
          === moment(timeFilterFrom).add(i, "months").format("YYYY-MM")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilterFrom).add(i, "months").format("YYYY-MM"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilterFrom).add(i, "months") <= moment(timeFilterTo));

  return arrangedData;
}

/*
* @brief: Custom Date: the X property will be Month name. if this option choosed, 
* there will be another options appear which is 2 Date field. you can use jQuery UI Datepicker. 
* First datepicker called "From" and Second datepicker called "To". After user choose 
* both of date, they are able to click a button then fetch the data based on the date range.
*/
function arrangeDataForCustomTime(data, typeFilter, timeFilter) {
  let arrangedData = [];
  let v1 = 0;
  let v2 = 0;
  let i = 0;
  do {
    v1 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type1).toUpperCase()
        && (
          moment(row.Date).format("YYYY-MM")
          === moment(timeFilter.from).add(i, "month").format("YYYY-MM")
        )
      ); 
    }).length;

    v2 = data.filter(row => {
      return (
        String(row.Type).toUpperCase() === String(typeFilter.type2).toUpperCase()
        && (
          moment(row.Date).format("YYYY-MM")
          === moment(timeFilter.from).add(i, "day").format("YYYY-MM")
        )
      ); 
    }).length;

    arrangedData.push({
      time: moment(timeFilter.from).add(i, "month").format("YYYY-MM-DD"),
      v1: v1,
      v2: v2
    });

    i++;
  } while (moment(timeFilter.from).add(i, "month") <= moment(timeFilter.to));

  return arrangedData;
}