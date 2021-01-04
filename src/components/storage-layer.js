
const KEY = "theme";

const save = (theme) => {
    localStorage.setItem(KEY, theme);
}

const get = () => {
    return localStorage.getItem(KEY);
}

export default {
    getTheme: get, save
}