import axios from "axios";
const axio=axios.create({
    baseURL: "https://api.sportmonks.com/v3/football",
    headers: {
        Authorization: 'HkHc64OkjtDHoLgDD5DAuJOV8JHuyrOwTi9sexSxH6Y2Ypn6ZLhh63x6ukd5'
    }
});
export default axio;