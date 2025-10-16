function loadHome() {

    fetch('http://localhost:5000/website/home/infos')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
        }
        return response.json()
    })
    .then(response => {
        const data = response.message

        document.getElementById("homeStatsNumberAccount").textContent = `🔥 ${data.accounts}+`
        document.getElementById("homeStatsNumberDuelPlayed").textContent = `⚡ ${data.duelsPlayed}`
        document.getElementById("homeStatsNumberNowGames").textContent = `🕹️ ${data.onlineGames}`
    
        const infra = data.infrastructureInfos


        // Db Server 
        // document.getElementById("dbServer").classList.add(returnState(infra.server.dbServer.state))
        // document.getElementById("dbServerLabel").innerHTML = `${returnValue(infra.server.dbServer.state, "fr")} <span class="ping ${returnValueClass(infra.server.dbServer.state)}">${infra.server.dbServer.other}</span>`;

        // Main Server
        // document.getElementById("mainServer").classList.add(returnState(infra.server.mainServer.state))
        // document.getElementById("mainServerLabel").innerHTML = `${returnValue(infra.server.mainServer.state, "fr")} <span class="ping ${returnValueClass(infra.server.mainServer.state)}">${infra.server.mainServer.other}</span>`;

        // Node Server A_1
        // document.getElementById("nodeServerA1").classList.add(returnState(infra.server.nodeA1.state))
        // document.getElementById("nodeServerA1Label").innerHTML = `${returnValue(infra.server.nodeA1.state, "fr")} <span class="ping ${returnValueClass(infra.server.nodeA1.state)}">${infra.server.nodeA1.other}</span>`;

        // Node Server A_2
        // document.getElementById("nodeServerA2").classList.add(returnState(infra.server.nodeA2.state))
        // document.getElementById("nodeServerA2Label").innerHTML = `${returnValue(infra.server.nodeA2.state, "fr")} <span class="ping ${returnValueClass(infra.server.nodeA2.state)}">${infra.server.nodeA2.other}</span>`;

        // API
        // document.getElementById("api").classList.add(returnState(infra.services.api.state))
        // document.getElementById("apiLabel").innerHTML = `<span class="ping ${returnValueClass(infra.services.api.state)}">${infra.services.api.other}</span>`

        // Matchmaking
        // document.getElementById("matchmaking").classList.add(returnState(infra.services.matchmaking.state));
        // document.getElementById("matchmakingLabel").innerHTML = `<span class="ping ${returnValueClass(infra.services.matchmaking.state)}">${infra.services.matchmaking.other}</span>`;

        // Database
        //document.getElementById("database").classList.add(returnState(infra.services.db.state));
        //document.getElementById("databaseLabel").innerHTML = `<span class="ping ${returnValueClass(infra.services.db.state)}">${infra.services.db.other}</span>`;

        // Luncher
        // document.getElementById("luncher").classList.add(returnState(infra.services.luncher.state));
        // document.getElementById("luncherLabel").innerHTML = `<span class="ping ${returnValueClass(infra.services.luncher.state)}">${infra.services.luncher.other}</span>`;

    })  

    // Database ping
    fetch('http://localhost:5000/utils/ping/db')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
        }
        return response.json()
    })
    .then(response => {
        var stateValue = 0


        
        document.getElementById("database").classList.add("online")
        document.getElementById("databaseLabel").innerHTML = `<span class="ping ping-online">${response.ping}ms</span>`
    })

    // Main server ping
    const dbPingStartTime = Date.now()
    fetch('http://localhost:5000/utils/ping/main')
    .then(response => {
        if (!response.ok) {
        throw new Error('Erreur HTTP : ' + response.status);
        }
        return response.json()
    })
    .then(response => {
        const dbPingEndTime = Date.now()
        const dbPing = dbPingEndTime - dbPingStartTime

        var dbState = null
        var stateValue = 3

        if (response.maintenance == true) {
            dbState = "Maintenance"
            stateValue = 4
        } else {
            dbState = dbPing + "ms"
            stateValue = 0
        }

        document.getElementById("mainServer").classList.add(returnState(stateValue))
        document.getElementById("mainServerLabel").innerHTML = `${returnValue(stateValue, "fr")} <span class="ping ${returnValueClass(stateValue)}">${dbState}</span>`;
    })
}

function returnState(number) {
    if (number == 0) {
        return "online"
    }

    if (number == 1) {
        return "degraded"
    }

    if (number == 2) {
        return "partial"
    }

    if (number == 3) {
        return "outage"
    }

    if (number == 4) {
        return "maintenance"
    }
}

function returnValue(number, language) {
    if (language == "fr") {
        if (number == 0) {
            return "En ligne"
        }

        if (number == 1) {
            return "Dégradé"
        }

        if (number == 2) {
            return "Partiellement Disponible"
        }

        if (number == 3) {
            return "Indisponible / Hors-ligne"
        }

        if (number == 4) {
            return "Maintenance"
        }
    }
}

function returnValueClass(number) {
    if (number == 0) {
        return "ping-online"
    }

    if (number == 1) {
        return "ping-degraded"
    }

    if (number == 2) {
        return "ping-partial"
    }

    if (number == 3) {
        return "ping-outage"
    }

    if (number == 4) {
        return "ping-maintenance"
    }
}

const createAccountBtn = document.getElementById("createAccount")

createAccountBtn.addEventListener("click", function() {
    window.location.href = "/pages/login/login.html"
})