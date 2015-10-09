<view-education class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column;  margin-top: 10px">
    <div class="" style="display: flex">
        <h4 style="margin: auto">{educTitle}</h4>
    </div>
    <!--<div class="vr-border-top-dark" style="flex: 1; padding: 5px">-->
    <div class="vr-border-top-dark" style="padding: 5px">
        <div class="mdl-grid mdl-grid--no-spacing">
            <div class="mdl-cell mdl-cell--2-col  mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2007"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin"
                 style="font-weight: 300">
                <span><strong>{educPhdHeader}</strong> {educPhdBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2002"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{educMaster2Header}</strong> {educMaster2Body}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2001"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{educMaster1Header}</strong> {educMaster1Body}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2000"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{educLicenceHeader}</strong> {educLicenceBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-1999"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{educDeugHeader}</strong> {educDeugBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-1995"
                 style="font-weight: 500; font-size: large">
            </div>
            <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300">
                <span><strong>{educBacHeader}</strong> {educBacBody}</span>
            </div>
        </div>
    </div>

    <script>
        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function () {

            self.educTitle = app.model.lang["educ.title"]
            self.educPhdHeader = app.model.lang["educ.phd.header"]
            self.educPhdBody = app.model.lang["educ.phd.body"]
            self.educMaster2Header = app.model.lang["educ.master2.header"]
            self.educMaster2Body = app.model.lang["educ.master2.body"]
            self.educMaster1Header = app.model.lang["educ.master1.header"]
            self.educMaster1Body = app.model.lang["educ.master1.body"]
            self.educLicenceHeader = app.model.lang["educ.licence.header"]
            self.educLicenceBody = app.model.lang["educ.licence.body"]
            self.educDeugHeader = app.model.lang["educ.deug.header"]
            self.educDeugBody = app.model.lang["educ.deug.body"]
            self.educBacHeader = app.model.lang["educ.bac.header"]
            self.educBacBody = app.model.lang["educ.bac.body"]
            self.update()
        })

    </script>
</view-education>