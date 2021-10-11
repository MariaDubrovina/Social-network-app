import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1ebea31a-d00a-46c9-9e4d-8174921ca616'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
    }
}

export const followAPI ={
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
        .then(response => response.data);
         
     }
}

export const unfollowAPI ={
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data);
         
     }
}

export const authMeAPI ={
    getAuthMeData() {
        return instance.get(`auth/me`)
        .then(response => response.data);
         
     },

     login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => response.data);
         
     },

     logout() {
        return instance.delete(`auth/login`)
        .then(response => response.data);
         
     }
}

export const ProfileAPI ={
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => response.data);
         
     },

     getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data);
         
     },

     updateStatus(status) {
        return instance.put(`profile/status`, {status:status})
        .then(response => response.data);
         
     }

    
}



