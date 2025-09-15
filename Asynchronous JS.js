// Promise
const fetchData = () => new promise(resolve => {
    setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData().then(data => console.log(data));

// async/await
async function load() {
    const data = await fetchData();
    console.log("Asysc:", data);
}
load();