'use strict';

const _ = require('lodash');

module.exports = {
    get_details
};

async function get_details (req) {
    const data = _.merge(
        req.params,
        req.query,
        req.body
    );

    const validated_params = await function_to_validate(data);

    return await asset_earnings.function_to_get_details(validated_params);
}