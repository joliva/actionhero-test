exports.action = {
  name:                   'users',
  description:            'users',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {
    required: [],
    optional: [],
  },

  run: function(api, connection, next){
    // your logic here
    next(connection, true);
  }
};