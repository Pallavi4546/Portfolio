export const state = () => ({
    dark: false
  });
 
  export const mutations = {
    SET_DARK: (state, bool) => {
      state.dark = bool;
    }
  };
  export const getters = {
    dark: (state) => state.dark
  };
  