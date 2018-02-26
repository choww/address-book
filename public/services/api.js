var axios = require('axios');

var api = {
  apiUrl: '/graphql?query=',
  fields: 'contactId,firstname,lastname,email,phone,address',

  // build graphQL query
  // output is a string in the format '/graphql?query={resourece(key:value){field1,field2}}'
  buildQuery: function(resource,fields=this.fields, filters={}) {
    var params = `{${fields}}`;
    var searchFilters = this.paramString(filters);
    return this.apiUrl + `{${resource}${searchFilters}${params}}`;
  },

  // input params is an object
  // output is a string in the format 'key1:value1,key2:value2'
  paramString: function(params) {
    if (Object.keys(params).length == 0) { return ''; }
    var paramStringArr = Object.keys(params).map(function(key) {
                           return [key, `"${params[key]}"`].join(':');
                        });
    return `(${paramStringArr.join(',')})`;
  },

  get: function(resource, filters={}, fields=this.fields) {
    return axios.get(this.buildQuery(resource, fields, filters));
  }
}

module.exports = api;
