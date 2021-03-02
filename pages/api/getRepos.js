import axios from "axios";

const repos = [
  { name: "fullstack-trivia-app", img: "" },
  { name: "fullstack-musical-venue-app", img: "" },
  { name: "wolfenstein-3D-remake", img: "" },
  { name: "fractol-exploration", img: "" },
  { name: "wire-frame-rasterizer", img: "" },
];
export async function getRepos() {
  const repoList = await axios
    .get("https://api.github.com/users/youngtran/repos")
    .then((res) => {
      return res.data.filter((data) => !data.fork);
    })
    .catch((err) => {
      return [];
    });
  return repoList;
}
