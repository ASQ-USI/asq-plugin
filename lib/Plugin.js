'use strict';

var _ = require("lodash");
var helpers = require('./helpers');


var QuestionType = function(asq){
  this.asq = asq;
  this.init();
}

QuestionType.prototype.hooks = {};

QuestionType.prototype.init = function(){
  this._registerHooks();
  this._registerEvents();
  return; 
};

QuestionType.prototype._registerHooks = function(){
  _.each(this.hooks, function(hookFn, hookName){
    this.asq.registerHook(hookName, this[hookFn].bind(this));
  }.bind(this));
}

QuestionType.prototype._registerEvents = function(){
  _.each(this.events, function(eventFn, eventName){
    this.asq.registerEvent(eventName, this[eventFn].bind(this));
  }.bind(this));
}

QuestionType.extend = helpers.extend;

module.exports = QuestionType;
