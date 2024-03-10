import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
    state: function() {
        return {
            pages: {1:"About Me", 2:"Education", 3:"Courses", 4:"Work Experience", 5:"Projects", 6:"Other Skills"},
            previousY: 0,
            currentY: 0,
            currentPageNo: 1,
        };
    },
    actions: {
        scrollY(y) {
            this.previousY = this.currentY
            this.currentY = y
        },
        setCurrentPage(pageNo) {
                if (this.currentY === 0) {
                    this.currentPageNo = 1
                    console.log(this.currentPageNo)
                } else if (this.currentY > this.previousY) {
                    this.currentPageNo = pageNo + 1
                    console.log(this.currentPageNo)
                } else if (this.currentY < this.previousY) {
                    this.currentPageNo = pageNo - 1
                    console.log(this.currentPageNo)
                }
        }
    }
})