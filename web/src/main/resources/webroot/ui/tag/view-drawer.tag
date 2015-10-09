<view-drawer class="mdl-layout__drawer mdl-layout--small-screen-only">

    <span class="mdl-layout-title">Menu</span>
    <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="mailto:{mail}">Contact</a>
        <a class="mdl-navigation__link" href="{twitter}">Twitter</a>
        <a class="mdl-navigation__link" href="{linkedin}">LinkedIn</a>
        <a class="mdl-navigation__link" href="{github}">Github</a>
        <a class="mdl-navigation__link" href="#" onclick={selectFr}>Fr</a>
        <a class="mdl-navigation__link" href="#" onclick={selectEn}>En</a>
    </nav>

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

    </script>
</view-drawer>