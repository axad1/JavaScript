// if the request takes longer than 2 sec it will be aborted.

async function fetchData() {
  const controller = new AbortController();
  setTimeout(() => {
    controller.abort();
  }, 2000);
  await fetch("/someapi", {
    signal: controller.signal,
  });
}

fetchData()
  .then((response) => {
    console.log("success");
  })
  .catch((err) => {
    console.log("failed");
  });
