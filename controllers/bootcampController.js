/*
@desc   Get All bootcamps 
@route  GET /api/v1/bootcamps
@access Public
*/

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: "Show all bootcamps"
    });
}

/*
@desc   Get a bootcamp
@route  GET /api/v1/bootcamps/:id
@access Public
*/

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Display bootcamp ${req.params.id}`
    });
}

/*
@desc   Create a new bootcamp 
@route  POST /api/v1/bootcamps
@access Private
*/

exports.createBootcamp = (req, res, next) => {
    res.status(201).json({
        success: true,
        msg: "Create new bootcamp"
    });
}

/*
@desc   Update a bootcamp
@route  PUT /api/v1/bootcamps/:id
@access Private
*/

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update bootcamp ${req.params.id}`
    });
}

/*
@desc   delete a bootcamp
@route  DELETE /api/v1/bootcamps/:id
@access Private
*/

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete bootcamp ${req.params.id}`
    });
}