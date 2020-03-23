import Axios from 'axios';

const baseurl = 'https://localhost:5001/api';

export default {
    aggregate: {
        age: (groupSize) => Axios.get(`${baseurl}/Aggregate/Age/${groupSize}`),
        gender: () => Axios.get(`${baseurl}/Aggregate/Gender`),
        custom: (path) => Axios.get(`${baseurl}/Aggregate/Patient/Custom/${path}`),
    },
};