const submitBtn = document.querySelector("button");
const username = document.querySelector("#username");
const resultsDiv = document.querySelector("#results");

function getUserDataFromGitHubXHR() {
  const usernameValue = username.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.github.com/users/${usernameValue}`);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      resultsDiv.innerHTML = `
      <h2>Name: ${data.name}</h2>
      <p>Public Repos: ${data.public_repos}</p>
      <p>Public Gists: ${data.public_gists}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>Account Created on: ${data.created_at}</p>
      <img src="${data.avatar_url}" alt="${data.login}">
    `;
    } else {
      resultsDiv.innerHTML = `
      <h2>User Not Found</h2>
    `;
    }
  };
  xhr.send();
}

async function getUserDataFromGitHubFetch() {
  const usernameValue = username.value;
  const response = await fetch(`https://api.github.com/users/${usernameValue}`);
  if (!response.ok) {
    resultsDiv.innerHTML = `
      <h2>User Not Found</h2>
    `;
    return;
  }
  const data = await response.json();
  resultsDiv.innerHTML = `
    <h2>Name: ${data.name}</h2>
    <p>Public Repos: ${data.public_repos}</p>
    <p>Public Gists: ${data.public_gists}</p>
    <p>Followers: ${data.followers}</p>
    <p>Following: ${data.following}</p>
    <p>Account Created on: ${data.created_at}</p>
    <img src="${data.avatar_url}" alt="${data.login}">
  `;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getUserDataFromGitHubXHR();
  // getUserDataFromGitHubFetch();
});
