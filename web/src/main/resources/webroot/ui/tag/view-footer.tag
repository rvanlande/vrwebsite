<view-footer>
    <footer class="mdl-mini-footer vr-color-background-dark">
        <div class="mdl-mini-footer__left-section">
            <div class="mdl-logo vr-color-text-light">RV</div>
            <ul class="mdl-mini-footer__link-list">
                <li><a href="mailto:{mail}">Contact</a></li>
                <li><a href="{twitter}">Twitter</a></li>
                <li><a href="{linkedin}">LinkedIn</a></li>
                <li><a href="{github}">Github</a></li>
            </ul>
        </div>
    </footer>

    <script>
        this.mail = app.constants.mail
        this.twitter = app.constants.twitter
        this.github = app.constants.github
        this.linkedin = app.constants.linkedin
    </script>
</view-footer>