navigator.getBattery().then((battery) => {
  console.log("Battery = ", battery.level * 100);
});
