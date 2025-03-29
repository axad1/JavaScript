function timeConversion(s) {
  const format = s.slice(-2);
  let [hh, mm, ss] = s.slice(0, -2).split(":");
  if (format === "PM" && hh != 12) {
    hh = +hh + 12;
  } else if (format === "AM" && hh === "12") {
    hh = "00";
  }

  const output = `${hh}:${mm}:${ss}`;
  console.log("Military time = ", output);
}

timeConversion("12:05:45PM");
timeConversion("07:05:45AM");
timeConversion("07:05:45PM");
