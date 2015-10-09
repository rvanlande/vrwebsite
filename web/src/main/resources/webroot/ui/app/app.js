// ~ Déclaration des fonctions d'initialisation ------------------------------------------------------------------------------------------------------
function initConstants () {

    app.events = {
        view : {
            select_fr : 'view_event_select_fr',
            select_en : 'view_event_select_en'
        },
        server : {
            AppService : {
                selected_lang : 'AppService.selectedLang'
            }
        }
    };

    app.constants = {
        mail : 'r.vanlande@gmail.com',
        twitter : 'https://twitter.com/rvanlande',
        github : 'https://github.com/rvanlande',
        linkedin : 'https://fr.linkedin.com/pub/renaud-vanlande/107/616/836'
    }
}

function initAppController() {
    app.controller = new AppController();
}

function initRiot() {
    riot.mount('*');
}

function initAppServer() {
    app.server = new AppServer();
    app.server.initVertxBus();
}

function initAppModel() {
    app.model = new AppModel();
}


// ~ Initialisation de l'application -----------------------------------------------------------------------------------------------------------------

// création de la variable globale de l'application
var app = {};

initConstants();
initAppController();
initAppModel();
initRiot();
initAppServer();



