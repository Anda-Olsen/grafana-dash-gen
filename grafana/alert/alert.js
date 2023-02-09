

function Alert(opts) {
  opts = opts || {};
  this.conditions = [];

  this.state = {
    "orgID": 1,
    "data": [],
    "noDataState": "NoData",
    "execErrState": "Alerting",
    "for": 300000000000,
    "provenance": "api"
  }

  this._init(opts);
  //this._initConditions(opts);
}

Alert.prototype._init = function _init(opts) {
  const self = this;

  Object.keys(opts).forEach(function eachOpt(opt) {
    self.state[opt] = opts[opt];
  });
}

Alert.prototype._initConditions = function _initConditions(opts) {
  var self = this;
  this.state.conditions = this.state.conditions || [];

  if (opts.conditions) {
    self.conditions = self.conditions.concat(opts.conditions);
  }
};

Alert.prototype.addCondition = function addCondition(condition) {
  this.conditions.push(condition);
  return this;
};

Alert.prototype.generate = function generate() {
  //this.state.conditions = this.conditions.map(condition => condition.generate());
  return this.state;
};

module.exports = Alert;
