const axios = require('axios');
const base_request = 'http://localhost:3001';

export async function getAll (){
    const {data} = await axios.get(`${base_request}/clients`);
    return data;
}

export async function getOneForGuid(guid){
    const { data } = await axios.get(`${base_request}/clients?guid=${guid}`);
    return data
}

export async function postOne(obj){
    const {status, statusText, data} = await axios.post(`${base_request}/clients`, obj);
    return {
        status : status, 
        statusText : statusText,
        data : data
    }
}

export async function putOneForGuid(guid, obj){
    const { status, statusText } = await axios.put(`${base_request}/clients/${guid}`, obj);
    return {
        status : status,
        statusText: statusText
    };
}

export async function delOneForId (id){
    const { status, statusText } = await axios.delete(`${base_request}/clients/${id}`);
    return {
        status : status,
        statusText: statusText
    };
}

export async function searchAll (text) {
    const data = await axios.get(`${base_request}/clients?q=${text}`);
    return data
}