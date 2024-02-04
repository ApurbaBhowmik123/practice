const testController = (req,res) => {
    try {
        res.status(200).send({
            success: true,
            message: 'test user api data',
        });
    } catch (error) {
        console.log("Error In Test API", error)
    }
};


module.exports = { testController };