import axios from 'axios';
export const USER_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

// This is the API call function to fetch users data and ensures no errors occur 
export const fetchUsersData =  () => axios.get(USER_API_ENDPOINT)

export const postUserData = (data) => axios.post(USER_API_ENDPOINT, data);

export const updateUserData = (userId, data) => axios.put(`${USER_API_ENDPOINT}/${userId}`, data);

export const deleteUserData = (userId) => axios.delete(`${USER_API_ENDPOINT}/${userId}`);