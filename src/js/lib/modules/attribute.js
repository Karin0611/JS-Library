import $ from '../core';

$.prototype.getAtt = function(name) {
    if (!name) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(name)
    }
    return this;
};
$.prototype.setAtt = function(name, value) {
    if (!name || !value) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value)
    }
    return this;
};
$.prototype.removeAtt = function(name) {
    if (!name) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name)
    }
    return this;
};
$.prototype.toggleAtt = function(name, value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }
    }
    return this;
};
