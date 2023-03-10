import { getPage } from "./route";



window.addEventListener("hashchange", () => changeHash())


let root = document.getElementById("root");
async function changeHash() {
  let str = document.location.hash
  let html = await getPage(str)
  root.innerHTML = html
}

(async () => {    await changeHash()  })()
  