document.addEventListener('DOMContentLoaded', function() {
    //Hide window at start
    document.getElementById("DoneDonePage").style.visibility = "hidden";

    document.getElementById("DoneDonePage").addEventListener("unload", function(){
        document.getElementById("DoneDonePage").style.visibility = "hidden";
    });

    //Wait for the Done Done iFrame to load
    document.getElementById("DoneDonePage").addEventListener("load", function(){
        var root = document.getElementById("DoneDonePage").contentDocument;

        root.body.style.backgroundColor = "#262626";

        //Change the top title to white
        var headerTitles = toArray(root.querySelectorAll(".dashboard-header-title a"));
        headerTitles.forEach(function(item){
            item.style.color = "white";
        });

        //Change all the black text in sub header to white
        var subhearderItems = toArray(root.querySelectorAll(".dashboard-subheader fieldset button strong"));
        subhearderItems.forEach(function(item){
            item.style.color = "white";
        });

        //Change the subheader down arrows to white
        var subheaderItemArrows = toArray(root.querySelectorAll(".dashboard-subheader fieldset>button i"));
        subheaderItemArrows.forEach(function(item){
            item.style.color = "white";
        });

        var dashboardHeaderIcons = toArray(root.querySelectorAll(".dashboard-header-icons li.selected a"));
        dashboardHeaderIcons.forEach(function(item){
            item.style.color = "white";
        });

        var siteheaders = toArray(root.querySelectorAll(".site-header"));
        siteheaders.forEach(function(item){
            item.style.background = "#696969"
        });


        var crumbs = toArray(root.querySelectorAll(".site-breadcrumbs li:last-child, .site-breadcrumbs li:last-child a, .site-breadcrumbs li:last-child i"));
        crumbs.forEach(function(item){
            item.style.color = "black";
        });

        var upperRightSiteIcons = toArray(root.querySelectorAll(".site-icons a"));
        upperRightSiteIcons.forEach(function(item){
            item.style.color = "black";
        });

        var siteIconsFile = toArray(root.querySelectorAll(".site-icons .dd-settingsoutline"));
        siteIconsFile.forEach(function(item){
            item.style.fill = "black";
        });

        //.dashboard-issue-subtitle a
        var dashboardSubTitles = toArray(root.querySelectorAll(".dashboard-issue-subtitle a"));
        dashboardSubTitles.forEach(function(item){
            item.style.color = "Gray";
        });

        //.dashboard-issue-subtitle
        var dashboardIssueSubTitles = toArray(root.querySelectorAll(".dashboard-issue-subtitle"));
        dashboardIssueSubTitles.forEach(function(item){
            item.style.color = "white";
        });

        //.dashboard-issue-creator .definition, .dashboard-issue-fixer .definition, .dashboard-issue-tester .definition
        var dashboardSubtitleInfo = toArray(root.querySelectorAll(".dashboard-issue-creator .definition, .dashboard-issue-fixer .definition, .dashboard-issue-tester .definition"));
        dashboardSubtitleInfo.forEach(function(item){
            item.style.color = "white";
        });

        //.dashboard-subheader-text strong
        var dashboardSubheaderText = toArray(root.querySelectorAll(".dashboard-subheader-text strong"));
        dashboardSubheaderText.forEach(function(item){
            item.style.color = "white";
        });

        //dashboard empty title
        var dashboardEmptyTitle = toArray(root.querySelectorAll(".dashboard-empty-title"));
        dashboardEmptyTitle.forEach(function(item){
            item.style.color = "white";
        });

        //labels
        var labels = toArray(root.querySelectorAll("label"));
        labels.forEach(function(item){
            item.style.color = "white";
        });

        //strongs
        var strongs = toArray(root.querySelectorAll("strong"));
        strongs.forEach(function(item){
            item.style.color = "white";
        });

        //dashboard update time
        var dashboardUpdateTimes = toArray(root.querySelectorAll(".dashboard-update-time"));
        dashboardUpdateTimes.forEach(function(item){
            item.style.color = "white";
        });

        //dashboard update titles
        var dashboardUpdateTitles = toArray(root.querySelectorAll(".dashboard-update-title"));
        dashboardUpdateTitles.forEach(function(item){
            item.style.color = "white";
        });

        //user input
        var userInput = toArray(root.querySelectorAll(".user-input"));
        userInput.forEach(function(item){
            item.style.color = "white";
        });

        //Show the iframe now that all styling has been applied
        document.getElementById("DoneDonePage").style.visibility = "visible";
    });
});

function toArray(nodelist){
    return Array.prototype.slice.call(nodelist);
}





