<view-header class="mdl-layout__header vr-color-background-dark">

    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row  mdl-layout--large-screen-only">
        <span class="mdl-layout-title vr-color-text-light"><span class="vr-color-text-third">Renaud Vanlande / </span>{title}</span>

        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
            <button id="id-icon-twitter" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-twitter"
                    onclick="window.open('{twitter}')"></button>
            <div class="mdl-tooltip" for="id-icon-twitter">Twitter</div>
            <button id="id-icon-linkedin" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-linkedin"
                    onclick="window.open('{linkedin}')"></button>
            <div class="mdl-tooltip" for="id-icon-linkedin">LinkedIn</div>
            <button id="id-icon-github" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-github"
                    onclick="window.open('{github}')"></button>
            <div class="mdl-tooltip" for="id-icon-github">GitHub</div>
            <button id="id-icon-mail" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-mail"
                    onclick="location.href='mailto:{mail}'"></button>
            <div class="mdl-tooltip" for="id-icon-mail">Contact</div>
            <a class="mdl-navigation__link"></a>
            <a name="fr_link" class="mdl-navigation__link vr-small-padding" href="#" onclick={selectFr}>fr</a>
            <a name="en_link" class="mdl-navigation__link vr-small-padding" href="#" onclick={selectEn}>en</a>
        </nav>
    </div>

    <script>

        var self = this
        this.mail = app.constants.mail
        this.twitter = app.constants.twitter
        this.github = app.constants.github
        this.linkedin = app.constants.linkedin

        this.selectFr = function (e) {
            app.controller.trigger(app.events.view.select_fr)
            self.update()
        }

        this.selectEn = function (e) {
            app.controller.trigger(app.events.view.select_en)
            self.update()
        }

        app.controller.on(app.events.server.AppService.selected_lang, function (lang) {
            self.title = app.model.lang["header.title"]
            if (lang == 'fr') {
                self.fr_link.classList.add("vr-color-text-third")
                self.fr_link.classList.remove("vr-color-text-light")
                self.en_link.classList.add("vr-color-text-light")
                self.en_link.classList.remove("vr-color-text-third")
            }
            else if (lang == 'en') {
                self.en_link.classList.add("vr-color-text-third")
                self.en_link.classList.remove("vr-color-text-light")
                self.fr_link.classList.add("vr-color-text-light")
                self.fr_link.classList.remove("vr-color-text-third")
            }
            self.update()
        })
    </script>

</view-header>