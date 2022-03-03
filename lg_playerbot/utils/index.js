module.exports = {
    /**
     * updatePlayerCount
     * Opdaterer konstant serverens spillerantal med en jævn hastighed
     * @param {object} client Klienten til botobjektet
     * @param {number} seconds Heltalsbeløbet for derivatet af # gange, det opdaterer botens aktivitet
     * ```js
     * const {updatePlayerCount} = require("./utils/")
     * const { Client } = require('discord.js');
     * const client = new Client;
     * updatePlayerCount(client, 10)
     * // Dette vil opdatere bottens akrivitet vær 10 sekund
     * ````
     */
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus() {
            status = `${GetNumPlayerIndices()} player(s)`
            //console.log(status)
            client.user.setActivity(status, {type: 'Ser'})
            return setStatus;
        }(), seconds * 1000)
    }

}