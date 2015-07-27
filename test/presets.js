/*jshint node:true, mocha:true */

'use strict';

require('should');

var rescale = require('rescale')(require('floating-adapter')).rescale;
var time = require('../src/linear-presets-time');

function convert(x, preset) {
  return rescale(x, preset[0], preset[1]);
};

function invert(preset) {
  return preset.slice(0).reverse();
};

describe('time presets', function() {
  it('should convert correctly', function() {
    (259200).should.be.exactly(convert(259200000000000, invert(time.secondToNanosecond)), 'secondToNanosecond')
      .and.exactly(convert(259200000000, invert(time.secondToMicrosecond)), 'secondToMicrosecond')
      .and.exactly(convert(259200000000, invert(time.secondToMicrosecond)), 'secondToMicrosecond')
      .and.exactly(convert(259200000, invert(time.secondToMillisecond)), 'secondToMillisecond')
      .and.exactly(convert(4320, invert(time.secondToMinute)), 'secondToMinute')
      .and.exactly(convert(72, invert(time.secondToHour)), 'secondToHour')
      .and.exactly(convert(3, invert(time.secondToDay)), 'secondToDay')
      .and.exactly(convert(0.42857142857142856, invert(time.secondToWeek)), 'secondToWeek')
      .and.approximately(convert(0.09856465225158627, invert(time.secondToMonth)), 10e-11, 'secondToMonth')
      .and.exactly(convert(0.008213721020965523, invert(time.secondToYear)), 'secondToYear')
      .and.exactly(convert(0.0008213721020965523, invert(time.secondToDecade)), 'secondToDecade')
      .and.exactly(convert(0.00008213721020965523, invert(time.secondToCentury)), 'secondToCentury')
      .and.approximately(convert(0.000008213721020965522, invert(time.secondToMillennium)), 10e-11, 'secondToMillennium');

    (0).should.be.exactly(convert(0, time.secondToNanosecond), 'secondToNanosecond')
      .and.exactly(convert(0, time.secondToMicrosecond), 'secondToMicrosecond')
      .and.exactly(convert(0, time.secondToMicrosecond), 'secondToMicrosecond')
      .and.exactly(convert(0, time.secondToMillisecond), 'secondToMillisecond')
      .and.exactly(convert(0, time.secondToMinute), 'secondToMinute')
      .and.exactly(convert(0, time.secondToHour), 'secondToHour')
      .and.exactly(convert(0, time.secondToDay), 'secondToDay')
      .and.exactly(convert(0, time.secondToWeek), 'secondToWeek')
      .and.exactly(convert(0, time.secondToMonth), 'secondToMonth')
      .and.exactly(convert(0, time.secondToYear), 'secondToYear')
      .and.exactly(convert(0, time.secondToDecade), 'secondToDecade')
      .and.exactly(convert(0, time.secondToCentury), 'secondToCentury')
      .and.exactly(convert(0, time.secondToMillennium), 'secondToMillennium');
  });
});
