'use strict';

const _ = require('lodash');

module.exports = {
    get_total_asset_earnings
};

async function get_total_asset_earnings (req) {
    const data = _.merge(
        req.params,
        req.query,
        req.body
    );

    const validated_params = await function_to_validate(data);
    const asset_earnings_overview = await function_to_get_overview(
        validated_params);

    const summations = _(asset_earnings_overview).groupBy('asset_type')
        .mapValues(item => util.sumByBigNum(item, 'earnings'))
        .value();

    return summations;
}
