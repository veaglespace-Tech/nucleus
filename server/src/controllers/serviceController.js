"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getServices = void 0;
const models_1 = require("../models");
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield models_1.Service.findAll();
        res.json(services);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching services' });
    }
});
exports.getServices = getServices;
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield models_1.Service.findByPk(req.params.id);
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching service' });
    }
});
exports.getServiceById = getServiceById;
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield models_1.Service.create(req.body);
        res.status(201).json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating service' });
    }
});
exports.createService = createService;
const updateService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield models_1.Service.findByPk(req.params.id);
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        yield service.update(req.body);
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating service' });
    }
});
exports.updateService = updateService;
const deleteService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service = yield models_1.Service.findByPk(req.params.id);
        if (!service)
            return res.status(404).json({ message: 'Service not found' });
        yield service.destroy();
        res.json({ message: 'Service deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting service' });
    }
});
exports.deleteService = deleteService;
