function AppServer() {

    var self = this;

    this.initVertxBus = function () {

        var eb = new vertx.EventBus('/eventbus');
        self.eventbus = eb;

        eb.onopen = function () {

            console.log('Event bus init: OK')

            self.selectLang('fr');

            //eb.registerHandler('client', function(message){
            //    console.log('Received message = ' + JSON.stringify(message));
            //});
        }
    }

    this.selectLang = function (lang) {

        var req = {
            service: 'AppService',
            params: null
        };

        if (lang == 'fr') {
            req.method = 'getFr';
        } else if (lang == 'en') {
            req.method = 'getEn';
        }

        self.eventbus.send('server', req, function (msg) {

            app.model.lang = msg;
            app.controller.trigger(app.events.server.AppService.selected_lang, lang);
        });
    };

    // change language event : english
    app.controller.on(app.events.view.select_en, function() {
        self.selectLang('en');
    });

    // change language event : french
    app.controller.on(app.events.view.select_fr, function() {
        self.selectLang('fr');
    });
}