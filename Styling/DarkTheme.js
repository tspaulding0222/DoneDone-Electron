document.addEventListener('DOMContentLoaded', function() {
    //Wait for the Done Done iFrame to load
    document.getElementById("DoneDonePage").addEventListener("load", function(){
        var root = document.getElementById("DoneDonePage").contentDocument;

        root.body.style.backgroundColor = "#262626";

        //Change the top title to white
        root.querySelector(".dashboard-header-title a").style.color = "white";

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

        root.querySelector(".dashboard-header-icons li.selected a").style.color = "white";

        root.querySelector(".site-header").style.backgroundColor = "#696969";

        var crumbs = toArray(root.querySelectorAll(".site-breadcrumbs li:last-child, .site-breadcrumbs li:last-child a, .site-breadcrumbs li:last-child i"));
        crumbs.forEach(function(item){
            item.style.color = "black";
        });

        var upperRightSiteIcons = toArray(root.querySelectorAll(".site-icons a"));
        upperRightSiteIcons.forEach(function(item){
            item.style.color = "black";
        });

        root.querySelector(".site-icons .dd-settingsoutline").style.fill = "black";

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
    });
});

function toArray(nodelist){
    return Array.prototype.slice.call(nodelist);
}





