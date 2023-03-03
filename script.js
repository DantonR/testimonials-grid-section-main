import d from "./data.json" assert { type: "json" };
console.dir(d);
let data = d;

d.forEach((item) => {
  console.dir(item);

  let card = document.createElement("div");
  card.className = "card";

  let name = document.createElement("p");
  name.className = "name";
  name.innerText = d.name;
});

const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      data: data,
    };
  },
}).mount("#app");
