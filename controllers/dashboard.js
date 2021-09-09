"use strict";

const logger = require("../utils/logger");
const stationCollection = require('../models/station-store.js');
const station = stationCollection.getAllStations();
const stationAnalytics = require('../models/analytics.js');
const { getTempFilename } = require("express-fileupload/lib/utilities");
const stationStore = require('../models/station-store');
const uuid = require("uuid");
const accounts = require ('./accounts.js');

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: stationStore.getAllStations(),
      stations: stationStore.getUserStations(loggedInUser.id),
    };
    logger.info('about to render', stationCollection);
    console.log(viewData);
    response.render("dashboard", viewData);
  },
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      userid: loggedInUser.id,
      title: request.body.title,
      readings: []
    }
    const stationId = uuid.v1();
    stationStore.addStation(stationId, newStation);
    response.redirect('/dashboard/');
  },
};

module.exports = dashboard;
