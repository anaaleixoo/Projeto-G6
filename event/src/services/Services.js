import axios from "axios";

const apiPorta = "5289";

const apiLocal = `http://localhost:${apiPorta}/api/`;

const apiAzure = "http:   apievent-drdvbhe7cagah3f7.brazilsouth-01.azurewebsites.net/api/";

const api = axios.create({

    baseURL: apiAzure
});

export default api;   