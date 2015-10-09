<view-about class="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone vr-card-dark"
            style="display: flex; flex-direction: column; justify-content: flex-start">

    <div class="" style="display: flex">
        <h4 style="margin: auto">{aboutTitle}</h4>
    </div>
    <div class="vr-border-top-light" style="display: flex; flex-direction: column; padding: 10px;">
        <img class="" src="ui/img/RV.png" style="max-width:150px; align-self: center">
    </div>
    <div class="" style="flex: 1; padding: 15px; text-align: center">
        <span class="" style="font-weight: 300;">{aboutContent}</span>
        <br><br>
        <span class="" style="font-weight: 300;">{aboutCitation}</span>
    </div>

    <script>

        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function () {
            self.aboutTitle = app.model.lang["about.title"]
            self.aboutContent = app.model.lang["about.content"]
            self.aboutCitation = app.model.lang["about.citation"]
            self.update()
        })
    </script>

</view-about>