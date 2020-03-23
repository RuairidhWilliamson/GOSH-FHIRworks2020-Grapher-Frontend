import API from './api';

export default {
    age: {
        label: 'Age',
        api: () => API.aggregate.age(5),
        groupSize: 5,
    },
    maritalStatus: {
        label: 'Marital Status',
        api: () => API.aggregate.custom('resource.maritalStatus.text'),
    },
    gender: {
        label: 'Gender',
        api: () => API.aggregate.custom('resource.gender'),
    },
    city: {
        label: 'City',
        api: () => API.aggregate.custom('resource.address.0.city'),
    },
    name_prefix: {
        label: 'Name Prefix',
        api: () => API.aggregate.custom('resource.name.0.prefix.0'),
    }
};