let a;
async function funky() {
  await fetch("https://api.scratch.mit.edu/users/collertabber/projects").then((response) => response.text()).then((json) => a = json);
  a = JSON.parse(a)
  alert(a)
}

funky()
