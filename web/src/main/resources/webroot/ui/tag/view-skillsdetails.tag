<view-skillsdetails class="mdl-cell--12-col vr-card" style="display: flex; flex-direction: column; margin-top: 10px">
    <div class="" style="display: flex">
        <h4 style="margin: auto">{title}</h4>
    </div>
    <!--<div class="vr-border-top-dark" style="flex: 1; padding: 5px">-->
    <div class="vr-border-top-dark" style="padding: 5px">
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>{languageHeader}</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>JAVA, PL/SQL, SQL, JavaScript</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>JEE/ Framework</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>Servlet, JDBC, JMX, EJB, Spring (transaction, security), Hibernate</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>SGBD/NoSql</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>Oracle, MySq, Titan/Cassandra, Neo4J, BluePrints, Gremlin</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>Application Server</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>JBoss, Glassfish, Tomcat, Apache, Jetty, Vertx</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>Architecture</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>{architectureBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>Tests</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>{testBody}</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>UI</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>HTML5/CSS3, Riot, GWT, Vaadin, Sencha, Swing (Jide), Reporting (JasperSoft)</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>{wsHeader}</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>RDF, OWL, SPARQL</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>Conception</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>UML, Design Pattern</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>{systemHeader}</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>Windows, Linux, VMWare, VirtualBox, Citrix</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>{toolsHeader}</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>Eclipse, Intellij Idea, Ant, Maven, SVN, JIRA, Bugzilla, Mantis, SQL Developper, TOAD</span>
            </div>
            <div class="mdl-cell mdl-cell--2-col" style="font-weight: 500; font-size: large">
                <span>{pmHeader}</span>
            </div>
            <div class="mdl-cell mdl-cell--10-col" style="font-weight: 300">
                <span>{pmBody}</span>
            </div>
        </div>
    </div>

    <script>
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

    </script>

</view-skillsdetails>