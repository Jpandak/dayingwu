import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userName: '鹦鹉爱好者',
        userAvatar: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=50',
        isLoggedIn: true
    }),

    actions: {
        login(userData) {
            this.userName = userData.name
            this.userAvatar = userData.avatar
            this.isLoggedIn = true
        },

        logout() {
            this.userName = null
            this.userAvatar = null
            this.isLoggedIn = false
        }
    }
})