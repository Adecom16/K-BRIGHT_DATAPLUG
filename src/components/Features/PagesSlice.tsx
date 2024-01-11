import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: true,
    uploadSong: false,
    myEarnings: false,
    newSongs: false,
    recommendedSongs: false,
    hottestSongs: false,
    mobileSideBar: false,
    activated: false,
    login: false
}

const PagesSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        displayHome: (state) => {
            state.home = true
        },
        removeHome: (state) => {
            state.home = false
        },
        displayUploadSong: (state) => {
            state.uploadSong = true
        },
        removeUploadSong: (state) => {
            state.uploadSong = false
        },
        displayEarnings: (state) => {
            state.myEarnings = true
        },
        removeEarnings: (state) => {
            state.myEarnings = false
        },
        displayNewSongs: (state) => {
            state.newSongs = true
        },
        removeNewSongs: (state) => {
            state.newSongs = false
        },
        displayrecommendedSongs: (state) => {
            state.recommendedSongs = true
        },
        removerecommendedSongs: (state) => {
            state.recommendedSongs = false
        },
        displayhottestSongs: (state) => {
            state.hottestSongs = true
        },
        removehottestSongs: (state) => {
            state.hottestSongs = false
        },
        toggleMobileSidebar: (state) => {
            state.mobileSideBar =  !state.mobileSideBar
        },
        displayLoginModal: (state) => {
            state.login = true
        },
        removeLoginModal: (state) => {
            state.login = false
        },
    }
})

export const {
    displayHome,
    displayUploadSong,
    displayEarnings,
    displayNewSongs,
    displayhottestSongs,
    displayrecommendedSongs,
    displayLoginModal,
    removeHome,
    removeUploadSong,
    removeEarnings,
    removeNewSongs,
    removehottestSongs,
    removerecommendedSongs,
    toggleMobileSidebar,
    removeLoginModal
} = PagesSlice.actions

export default PagesSlice.reducer