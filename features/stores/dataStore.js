const dataStore = {
  dataStore: {
    validVoucher: undefined,
    nonValidVoucher: undefined,
    signIn: undefined,
    signUp: undefined
  },

  set validVoucher(value) {
    this.dataStore.validVoucher = value;
  },

  get validVoucher() {
    return this.dataStore.validVoucher;
  },

  set nonValidVoucher(value) {
    this.dataStore.nonValidVoucher = value;
  },

  get nonValidVoucher() {
    return this.dataStore.nonValidVoucher;
  },

  set signIn(value) {
    this.dataStore.signIn = value;
  },

  get signIn() {
    return this.dataStore.signIn;
  },

  set signUp(value) {
    this.dataStore.signUp = value;
  },

  get signUp() {
    return this.dataStore.signUp;
  },
};

module.exports = dataStore;
