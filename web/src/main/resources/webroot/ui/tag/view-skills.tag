<view-skills class="mdl-cell mdl-cell--12-col vr-card" style="display: flex; flex-direction: column">

    <div style="display: flex">
        <h4 style="margin: auto">{skillTitle}</h4>
    </div>
    <!--<div class="vr-border-top-dark" style="flex: 1; padding: 5px">-->
    <div class="vr-border-top-dark" style="padding: 5px">
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-dev-arch" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-front-back" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-java" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-js" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-rdbms" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-nosql" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-architecture-radar" style="width:100%; height:200px">
                </div>
            </div>
            <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone">
                <div id="vr-architecture-legend" style="width:100%; height:200px">
                </div>
            </div>
        </div>
    </div>

    <script>
        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function() {
            self.skillTitle = app.model.lang["skill.title"]
            self.update()
        })

    </script>

</view-skills>