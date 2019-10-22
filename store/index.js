// export const state = () => ({

// })

export const mutations = {
    //hildas
    updateHildasMenu(state, hildasMenu) {
        state.hildasMenu = hildasMenu
    },
    //Aptitgården
    updateAptitgardenMenu(state, aptitgardenMenu) {
        state.aptitgardenMenu = aptitgardenMenu
    },
    //MVG
    updateMvgMenu(state, mvgMenu) {
        state.mvgMenu = mvgMenu
    },
    //Matsmak
    updateMatsmakMenu(state, matsmakMenu) {
        state.matsmakMenu = matsmakMenu
    },
    //Vällagat
    updateVallagatMenu(state, vallagatMenu) {
        state.vallagatMenu = vallagatMenu
    },
    //Beat
    updateBeatMenu(state, beatMenu) {
        state.beatMenu = beatMenu
    },
    //Ullevi R & K
    updateUlleviMenu(state, ulleviMenu) {
        state.ulleviMenu = ulleviMenu
    },
    //Ullevigatan
    updateUgMenu(state, ugMenu) {
        state.ugMenu = ugMenu
    },
    //Ulle & Vi
    updateUlleochviMenu(state, ulleochviMenu) {
        state.ulleochviMenu = ulleochviMenu
    }

}

export const actions = {
    async nuxtServerInit({ commit }, { req }) {

        //Loads the menus in the store, initiated before everything else

        //Hildas
        var hildasUrl = "https://ericthewolf.com/hildas";
        var hildasMenu = await this.$axios
            .get(hildasUrl).then(response => (this.hildasMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateHildasMenu', hildasMenu)
        
        //Aptitgården
        var aptitgardenUrl = "https://ericthewolf.com/aptitgarden";
        var aptitgardenMenu = await this.$axios
            .get(aptitgardenUrl).then(response => (this.aptitgardenMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateAptitgardenMenu', aptitgardenMenu)
               
        //MVG
        var mvgUrl = "https://ericthewolf.com/mvg";
        var mvgMenu = await this.$axios
            .get(mvgUrl).then(response => (this.mvgMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateMvgMenu', mvgMenu)
        
        //Matsmak
        var matsmakUrl = "https://ericthewolf.com/matsmak";
        var matsmakMenu = await this.$axios
            .get(matsmakUrl).then(response => (this.matsmakMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateMatsmakMenu', matsmakMenu)
        
        //Vällagat
        var vallagatUrl = "https://ericthewolf.com/vallagat";
        var vallagatMenu = await this.$axios
            .get(vallagatUrl).then(response => (this.vallagatMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateVallagatMenu', vallagatMenu)
        
        //Beat
        var beatUrl = "https://ericthewolf.com/beat";
        var beatMenu = await this.$axios
            .get(beatUrl).then(response => (this.beatMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateBeatMenu', beatMenu)
        
        //Ullevi R & K
        var ulleviUrl = "https://ericthewolf.com/ullevi";
        var ulleviMenu = await this.$axios
            .get(ulleviUrl).then(response => (this.ulleviMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateUlleviMenu', ulleviMenu)
        
        //Ullevigatan
        var ugUrl = "https://ericthewolf.com/ug";
        var ugMenu = await this.$axios
            .get(ugUrl).then(response => (this.ugMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateUlleochviMenu', ugMenu)
        
        //Ulle & Vi
        var ulleochviUrl = "https://ericthewolf.com/ulleochvi";
        var ulleochviMenu = await this.$axios
            .get(ulleochviUrl).then(response => (this.ulleochviMenu = response.data))
            .catch(function (error) {
                console.log(error);
            })
        commit('updateUgMenu', ulleochviMenu)
        
    }
}