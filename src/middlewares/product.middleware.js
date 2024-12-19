const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/badRequest.error');
const errorResponse = require('../utils/error.response');

function createProductValidator(req, res, next) {
    const { title, description, price, image, category } = req.body; // Extract properties from req.body

    if (!title) {
        return res
            .status(StatusCodes.BAD_REQUEST) // Use the correct constant
            .json(errorResponse('Title not present in the incoming request', new BadRequest('Title')));
    }

    if (!description) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse('Description not present in the incoming request', new BadRequest('Description')));
    }

    if (!price) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse('Price not present in the incoming request', new BadRequest('Price')));
    }

    if (!image) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse('Image not present in the incoming request', new BadRequest('Image')));
    }

    if (!category) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse('Category not present in the incoming request', new BadRequest('Category')));
    }

    next();
}

module.exports = {
    createProductValidator
};
