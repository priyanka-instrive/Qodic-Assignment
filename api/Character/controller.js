const axios = require("axios");
const service = require("./service");

const getAllPeople = async (req, res, next) => {
    try {
        const response = await axios.get("https://swapi.dev/api/people");
        await response.data.results.forEach(async (person) => {
            await service.createData({ ...person });
        });
        res.status(200).json({
            message: "data get sucessfully",
            data: response.data.results,
        });
    } catch (error) {
        next(error);
    }
};

const getPersonById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

const searchCharacters = async (req, res, next) => {
    try {
        // Fetch characters based on the query
        const characters = await service.getData(req.query);

        res.status(200).json({
            message: "Characters fetched successfully",
            data: characters,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPeople,
    getPersonById,
    searchCharacters,
};
