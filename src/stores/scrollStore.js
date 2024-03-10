import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: function() {
        return {
            pages: {1:"About Me", 2:"Education", 3:"Courses", 4:"Work Experience", 5:"Projects", 6:"Other Skills"},
            isVisible: {1:false, 2:false, 3:false, 4:false, 5:false, 6:false},
        };
    },
    actions: {
        toggleVisiblity(pageNo, targetIsVisible) {
            this.isVisible[pageNo] = targetIsVisible;
        }
    }
})