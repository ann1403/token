let user = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
        "login": {
            "type": "string",
            "require": true,
            "minLength": 3,
            "maxLength": 16
        },
        "pwd": {
            "type": "string",
            "require": true,
            "minLength": 6,
            "maxLength": 24,
        },
    }
};

module.exports = user;