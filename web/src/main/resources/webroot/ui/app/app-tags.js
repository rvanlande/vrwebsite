riot.tag('view-about', '<div class="" style="display: flex"> <h4 style="margin: auto">{aboutTitle}</h4> </div> <div class="vr-border-top-light" style="display: flex; flex-direction: column; padding: 10px;"> <img class="" src="ui/img/RV.png" style="max-width:150px; align-self: center"> </div> <div class="" style="flex: 1; padding: 15px; text-align: center"> <span class="" style="font-weight: 300;">{aboutContent}</span> <br><br> <span class="" style="font-weight: 300;">{aboutCitation}</span> </div>', 'class="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone vr-card-dark" style="display: flex; flex-direction: column; justify-content: flex-start"', function(opts) {

        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function () {
            self.aboutTitle = app.model.lang["about.title"]
            self.aboutContent = app.model.lang["about.content"]
            self.aboutCitation = app.model.lang["about.citation"]
            self.update()
        })
    
});
riot.tag('view-drawer', '<span class="mdl-layout-title">Menu</span> <nav class="mdl-navigation"> <a class="mdl-navigation__link" href="mailto:{mail}">Contact</a> <a class="mdl-navigation__link" href="{twitter}">Twitter</a> <a class="mdl-navigation__link" href="{linkedin}">LinkedIn</a> <a class="mdl-navigation__link" href="{github}">Github</a> <a class="mdl-navigation__link" href="#" onclick="{selectFr}">Fr</a> <a class="mdl-navigation__link" href="#" onclick="{selectEn}">En</a> </nav>', 'class="mdl-layout__drawer mdl-layout--small-screen-only"', function(opts) {
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

    
});
riot.tag('view-education', '<div class="" style="display: flex"> <h4 style="margin: auto">{educTitle}</h4> </div>  <div class="vr-border-top-dark" style="padding: 5px"> <div class="mdl-grid mdl-grid--no-spacing"> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2007" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educPhdHeader}</strong> {educPhdBody}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2002" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educMaster2Header}</strong> {educMaster2Body}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2001" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educMaster1Header}</strong> {educMaster1Body}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-2000" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educLicenceHeader}</strong> {educLicenceBody}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-1999" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educDeugHeader}</strong> {educDeugBody}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-1995" style="font-weight: 500; font-size: large"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{educBacHeader}</strong> {educBacBody}</span> </div> </div> </div>', 'class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column; margin-top: 10px"', function(opts) {
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

    
});
riot.tag('view-experience', '<div class="" style="display: flex"> <h4 style="margin: auto">{xpTitle}</h4> </div>  <div class="vr-border-top-dark" style="padding: 5px"> <div class="mdl-grid mdl-grid--no-spacing"> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2015"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{xpDeveloperHeader}</strong> {xpDeveloperBody} <br><strong>Back-end : </strong>{xpBackendBody} <br><strong>{xpDatabaseHeader} : </strong>{xpDatabaseBody} <br><strong>Front-end : </strong>{xpFrontendBody} <br><strong>{xpQualityHeader} :</strong> {xpQualityBody}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2009"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{xpLeadHeader}</strong> {xpLeadBody}</span> </div> <div class="mdl-cell mdl-cell--2-col mdl-cell--3-col-tablet mdl-cell--1-col-phone vr-timeline-xp-2007"> </div> <div class="mdl-cell mdl-cell--10-col mdl-cell--5-col-tablet mdl-cell--3-col-phone vr-margin" style="font-weight: 300"> <span><strong>{xpRdHeader} :</strong> {xpRdBody} <br><strong>{xpConferenceHeader} :</strong> {xpConferenceBody} <br><strong>{xpTeachingHeader} :</strong> {xpTeachingBody} </span> </div> </div> </div>', 'class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column; margin-top: 10px"', function(opts) {
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

    
});
riot.tag('view-footer', '<footer class="mdl-mini-footer vr-color-background-dark"> <div class="mdl-mini-footer__left-section"> <div class="mdl-logo vr-color-text-light">RV</div> <ul class="mdl-mini-footer__link-list"> <li><a href="mailto:{mail}">Contact</a></li> <li><a href="{twitter}">Twitter</a></li> <li><a href="{linkedin}">LinkedIn</a></li> <li><a href="{github}">Github</a></li> </ul> </div> </footer>', function(opts) {
        this.mail = app.constants.mail
        this.twitter = app.constants.twitter
        this.github = app.constants.github
        this.linkedin = app.constants.linkedin
    
});
riot.tag('view-header', '<div class="mdl-layout-icon"></div> <div class="mdl-layout__header-row mdl-layout--large-screen-only"> <span class="mdl-layout-title vr-color-text-light"><span class="vr-color-text-third">Renaud Vanlande / </span>{title}</span> <div class="mdl-layout-spacer"></div> <nav class="mdl-navigation"> <button id="id-icon-twitter" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-twitter" onclick="window.open(\'{twitter}\')"></button> <div class="mdl-tooltip" for="id-icon-twitter">Twitter</div> <button id="id-icon-linkedin" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-linkedin" onclick="window.open(\'{linkedin}\')"></button> <div class="mdl-tooltip" for="id-icon-linkedin">LinkedIn</div> <button id="id-icon-github" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-github" onclick="window.open(\'{github}\')"></button> <div class="mdl-tooltip" for="id-icon-github">GitHub</div> <button id="id-icon-mail" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab vr-icon-mail" onclick="location.href=\'mailto:{mail}\'"></button> <div class="mdl-tooltip" for="id-icon-mail">Contact</div> <a class="mdl-navigation__link"></a> <a name="fr_link" class="mdl-navigation__link vr-small-padding" href="#" onclick="{selectFr}">fr</a> <a name="en_link" class="mdl-navigation__link vr-small-padding" href="#" onclick="{selectEn}">en</a> </nav> </div>', 'class="mdl-layout__header vr-color-background-dark"', function(opts) {

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
    
});
riot.tag('view-skills', '<div style="display: flex"> <h4 style="margin: auto">{skillTitle}</h4> </div>  <div class="vr-border-top-dark" style="padding: 5px"> <div class="mdl-grid"> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-dev-arch" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-front-back" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-java" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-js" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-rdbms" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-nosql" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-architecture-radar" style="width:100%; height:200px"> </div> </div> <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone"> <div id="vr-architecture-legend" style="width:100%; height:200px"> </div> </div> </div> </div>', 'class="mdl-cell mdl-cell--12-col vr-card" style="display: flex; flex-direction: column"', function(opts) {
        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function() {
            self.skillTitle = app.model.lang["skill.title"]
            self.update()
        })

    
});
riot.tag('view-skillsdetails', '<div class="" style="display: flex"> <h4 style="margin: auto">{title}</h4> </div>  <div class="vr-border-top-dark" style="padding: 5px"> <div class="mdl-grid"> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>{languageHeader}</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>JAVA, PL/SQL, SQL, JavaScript</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>JEE/ Framework</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>Servlet, JDBC, JMX, EJB, Spring (transaction, security), Hibernate</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>SGBD/NoSql</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>Oracle, MySq, Titan/Cassandra, Neo4J, BluePrints, Gremlin</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>Application Server</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>JBoss, Glassfish, Tomcat, Apache, Jetty, Vertx</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>Architecture</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>{architectureBody}</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>Tests</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>{testBody}</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>UI</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>HTML5/CSS3, Riot, GWT, Vaadin, Sencha, Swing (Jide), Reporting (JasperSoft)</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>{wsHeader}</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>RDF, OWL, SPARQL</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>Conception</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>UML, Design Pattern</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>{systemHeader}</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>Windows, Linux, VMWare, VirtualBox, Citrix</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>{toolsHeader}</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>Eclipse, Intellij Idea, Ant, Maven, SVN, JIRA, Bugzilla, Mantis, SQL Developper, TOAD</span> </div> <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large"> <span>{pmHeader}</span> </div> <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300"> <span>{pmBody}</span> </div> </div> </div>', 'class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column; margin-top: 10px"', function(opts) {
        var self = this

        app.controller.on(app.events.server.AppService.selected_lang, function () {

            self.title = app.model.lang["skilldetails.title"]
            self.languageHeader = app.model.lang["skilldetails.language.header"]
            self.architectureBody = app.model.lang["skilldetails.architecture.body"]
            self.testBody = app.model.lang["skilldetails.test.body"]
            self.wsHeader = app.model.lang["skilldetails.ws.header"]
            self.systemHeader = app.model.lang["skilldetails.system.header"]
            self.toolsHeader = app.model.lang["skilldetails.tools.header"]
            self.pmHeader = app.model.lang["skilldetails.pm.header"]
            self.pmBody = app.model.lang["skilldetails.pm.body"]
            self.update()
        })

    
});