import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);
export const getRepositories = async (login) =>
  api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((repo) => repo.language)
    .reduce(
      (acc, language) => ({
        ...acc,
        [language]: (acc[language] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((languages) => ({
      name: languages,
      count: stats[languages],
      color: langColors[languages.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};
