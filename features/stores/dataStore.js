const dataStore = {
  dataStore: {
    validVoucher: undefined,
    nonValidVoucher: undefined
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
};

export default dataStore;
