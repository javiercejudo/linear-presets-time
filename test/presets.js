/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var time = require('linear-preset-factory')(require('../src/linear-presets-time'));

function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
}

function invert(preset) {
  return preset.slice(0).reverse();
}

describe('time presets', function() {
  it('should convert correctly', function() {
    (259200).should.be.exactly(convert(259200, invert(time.second_second)), 'second_second')
      .and.exactly(convert(259200000000000, invert(time.second_nanosecond)), 'second_nanosecond')
      .and.exactly(convert(259200000000, invert(time.second_microsecond)), 'second_microsecond')
      .and.exactly(convert(259200000000, invert(time.second_microsecond)), 'second_microsecond')
      .and.exactly(convert(259200000, invert(time.second_millisecond)), 'second_millisecond')
      .and.exactly(convert(4320, invert(time.second_minute)), 'second_minute')
      .and.exactly(convert(72, invert(time.second_hour)), 'second_hour')
      .and.exactly(convert(3, invert(time.second_day)), 'second_day')
      .and.exactly(convert(0.42857142857142856, invert(time.second_week)), 'second_week')
      .and.approximately(convert(0.09856465225158627, invert(time.second_month)), 10e-11, 'second_month')
      .and.exactly(convert(0.008213721020965523, invert(time.second_year)), 'second_year')
      .and.exactly(convert(0.0008213721020965523, invert(time.second_decade)), 'second_decade')
      .and.exactly(convert(0.00008213721020965523, invert(time.second_century)), 'second_century')
      .and.approximately(convert(0.000008213721020965522, invert(time.second_millennium)), 10e-11, 'second_millennium');

    (0).should.be.exactly(convert(0, time.second_second), 'second_second')
      .and.exactly(convert(0, time.second_nanosecond), 'second_nanosecond')
      .and.exactly(convert(0, time.second_microsecond), 'second_microsecond')
      .and.exactly(convert(0, time.second_microsecond), 'second_microsecond')
      .and.exactly(convert(0, time.second_millisecond), 'second_millisecond')
      .and.exactly(convert(0, time.second_minute), 'second_minute')
      .and.exactly(convert(0, time.second_hour), 'second_hour')
      .and.exactly(convert(0, time.second_day), 'second_day')
      .and.exactly(convert(0, time.second_week), 'second_week')
      .and.exactly(convert(0, time.second_month), 'second_month')
      .and.exactly(convert(0, time.second_year), 'second_year')
      .and.exactly(convert(0, time.second_decade), 'second_decade')
      .and.exactly(convert(0, time.second_century), 'second_century')
      .and.exactly(convert(0, time.second_millennium), 'second_millennium');
  });
});
