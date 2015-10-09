<view-experience class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column; margin-top: 10px">

    <div class="" style="display: flex">
        <h4 style="margin: auto">{xpTitle}</h4>
    </div>
    <!--<div class="vr-border-top-dark" style="flex: 1; padding: 5px">-->
    <div class="vr-border-top-dark" style="padding: 5px">
        <div class="mdl-grid mdl-grid--no-spacing">

            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2015">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                                <span><strong>{xpDeveloperHeader}</strong> {xpDeveloperBody}
                                    <br><strong>Back-end : </strong>{xpBackendBody}
                                    <br><strong>{xpDatabaseHeader} : </strong>{xpDatabaseBody}
                                    <br><strong>Front-end : </strong>{xpFrontendBody}
                                    <br><strong>{xpQualityHeader} :</strong> {xpQualityBody}</span>

            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2009">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{xpLeadHeader}</strong> {xpLeadBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2007">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                                <span><strong>{xpRdHeader} :</strong> {xpRdBody}
                                    <br><strong>{xpConferenceHeader} :</strong> {xpConferenceBody}
                                    <br><strong>{xpTeachingHeader} :</strong> {xpTeachingBody}
                                </span>
            </div>
        </div>
    </div>

    <script>
        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function () {
            self.xpTitle = app.model.lang["xp.title"]
            self.xpDeveloperHeader = app.model.lang["xp.developer.header"]
            self.xpDeveloperBody = app.model.lang["xp.developer.body"]
            self.xpBackendBody = app.model.lang["xp.backend.body"]
            self.xpDatabaseHeader = app.model.lang["xp.database.header"]
            self.xpDatabaseBody = app.model.lang["xp.database.body"]
            self.xpFrontendBody = app.model.lang["xp.frontend.body"]
            self.xpQualityHeader = app.model.lang["xp.quality.header"]
            self.xpQualityBody = app.model.lang["xp.quality.body"]
            self.xpLeadHeader = app.model.lang["xp.lead.header"]
            self.xpLeadBody = app.model.lang["xp.lead.body"]
            self.xpRdHeader = app.model.lang["xp.rd.header"]
            self.xpRdBody = app.model.lang[".xp.rd.body"]
            self.xpConferenceHeader = app.model.lang["xp.conference.header"]
            self.xpConferenceBody = app.model.lang["xp.conference.body"]
            self.xpTeachingHeader = app.model.lang["xp.teaching.header"]
            self.xpTeachingBody = app.model.lang["xp.teaching.body"]
            self.update()
        })

    </script>

</view-experience>