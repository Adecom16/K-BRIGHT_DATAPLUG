import {createSlice} from '@reduxjs/toolkit';

// type myState = {
//     streamReg: boolean
// }

const initialState = {
    streamerReg: false,
    artisteReg: false,
    streamerBank: false,
    artisteBank: true,
    selectedStatus: '',
    newArtisteDetails: {
        stageName: '',
        fullName: '',
        email: '',
        password: ''
    },
    newStreamerDetails: {
        fullName: '',
        email: '',
        password: ''
    },
    bank:{
        bank_code:'',
        name:''
    },
    user:{
        role:'',
        name:'',
        email:'',
        balance:0.00,
        status:{
            id:0,
            name:'',
            next_action:'',
        },
        bank:{
            bank_name:'',
            bank_code:'',
            short_code:'',
        },
        bank_account:{
            account_number:'',
            account_name:'',
        },
    },

    currentPlaying:{
        title: '',
        promotion_image: '',
        music: '',
        slug: '',
        streamed_earn:{amount:0, date:''},
        artiste_names: '',
        status_id: 0,
        status: { name: '' },
        category: { name: '' }
    },
    musicSearch: "",
    nextMusic:"",
    previoursMusic:""

    
}

const AccountSlice = createSlice({
    name: 'Account',
    initialState,
    reducers: {
        displayStreamerReg(state){
            state.streamerReg = true
        },
        closeStreamerReg(state){
            state.streamerReg = false
        },
        displayStreamerBankDetails: (state) => {
            state.streamerBank = true
        },
        closeStreamerBankDetails: (state) => {
            state.streamerBank = false
        },
        displayArtisteReg(state){
            state.artisteReg = true
        },
        closeArtisteReg(state){
            state.artisteReg = false
        },
        displayArtisteBankDetails: (state) => {
            state.artisteBank = true
        },
        closeArtisteBankDetails: (state) => {
            state.artisteBank = false
        },
        saveSelectedStatus: (state, {payload}) => {
            state.selectedStatus = payload
        },
        getNewArtisteDetails: (state, {payload}) => {
            state.newArtisteDetails = payload
        },
        getNewStreamerDetails: (state, {payload}) => {
            state.newStreamerDetails = payload
        },
        getBanks:(state, { payload})=>{
            state.bank=payload
        },
        setUser:(state, {payload})=>{
            state.user = payload;
        },

        setCurrentPlaying:(state,{payload})=>{
            state.currentPlaying =payload;
        },
        setNextPlaying:(state,{payload})=>{
            state.nextMusic =payload;
        },
        setPreviousPlaying:(state,{payload})=>{
            state.previoursMusic =payload;
        },
        updateMusicSearch:((state, {payload}) => {
            state.musicSearch = payload
        })
        
    }
})

export const {
    displayStreamerReg,
    displayStreamerBankDetails,
    closeStreamerBankDetails,
    closeStreamerReg,
    displayArtisteReg,
    closeArtisteReg,
    displayArtisteBankDetails,
    closeArtisteBankDetails,
    saveSelectedStatus,
    getNewArtisteDetails,
    getNewStreamerDetails,
    getBanks,
    setUser,
    setCurrentPlaying,
    updateMusicSearch,
    setPreviousPlaying,
    setNextPlaying,
} = AccountSlice.actions


export default AccountSlice.reducer;