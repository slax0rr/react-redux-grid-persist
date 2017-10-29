const plugins = {
  EDITOR: {
    type: 'inline',
    enabled: false,
    focusOnEdit: true
  },
  LOADER: {
    enabled: true
  }
};

const columns = [{
  name: 'Account',
  dataIndex: 'account',
  width: '70%',
  editable: false,
  className: 'account-col'
}, {
  name: 'Ballance',
  dataIndex: 'ballance',
  width: '30%',
  editabled: false,
  className: 'ballance-col'
}];

const data = [{
  account: 'Account 1',
  ballance: '900.00€'
}, {
  account: 'Account 2',
  ballance: '600.00€'
}];

export default {
  plugins,
  columns,
  data,
  height: 250,
  classNames: [
    'accounts',
    'financer'
  ],
  stateKey: 'accounts-grid'
};
