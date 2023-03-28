import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '16892ad5-07b1-4d77-845c-c1cb7db248b8'},
});

export const usersApi = {
    getUsers(page, count) {
        return instance.get(`users?page=${page}&count=${count}`).then(res => res.data);
    },
}

export const profileApi = {
    setProfileInfo(contacts) {
        return instance.put(`/profile`, contacts).then(res => res.data)
    },
    setPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => res.data);
    },

    getProfile(idParams, authId) {
        return instance.get(`profile/${idParams ? idParams : authId}`).then(res => res.data);
    },

    setStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(res => res.data);
    },

    getStatus(idParams, authId) {
        return instance.get(`profile/status/${idParams ? idParams : authId}`).then(res => res.data);
    }
}

export const followApi = {
    follow(idForFollow) {
        return instance.post(`follow/${idForFollow}`).then(res => res.data);
    },
    unFollow(idForUnFollow) {
        return instance.delete(`follow/${idForUnFollow}`).then(res => res.data);
    },
}

export const authApi = {
    auth() {
        return instance.get(`auth/me`).then(res => res.data);
    },
    login(loginData) {
        return instance.post(`auth/login`, loginData).
        then(res => res.data);
    },
    logout() {
        return instance.delete('auth/login').then(res => res.data);
    },
    captcha() {
        return instance.get('security/get-captcha-url').then(res => res.data);
    }
}

//проверь как работае
//      export const commonApi={
//     auth() {
//         return authApi.auth()
//     }
// }


