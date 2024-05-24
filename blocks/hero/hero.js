export default async function decorate(block) {
  fetch("/goals.json")
    .then(res => res.json())
    .then(res => {
      const { data, total } = res;
      console.log("🚀 ~ file: hero.js:6 ~ decorate ~ data:", data);
      for (let i = 0; i < total; i++) {
        const p = document.createElement("p");
        p.innerHTML = data[i].Name + " - " + data[i].Goals;
        block.append(p);
      }
    });
}
