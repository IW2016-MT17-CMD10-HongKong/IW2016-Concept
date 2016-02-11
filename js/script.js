function initApp() {
    $(".team-member").on("click", toggleActiveTeamMember);
    var firstMember = $(".team-pictures-row:first-child .team-member:first-child");
    firstMember.addClass("show active");
    var paragraph = $("p[data-person=" + firstMember.data("person") + "]");
    paragraph.addClass("show active");
    setTimeout(function () {
        paragraph.parent().height(paragraph.height());
    }, 10);
}

function toggleActiveTeamMember() {
    var member = $(this);
    var currentMember =  $(".team-member.active");
    if (member[0] == currentMember[0]) return;
    var row = member.parent(".team-pictures-row");
    var currentRow = $(".team-pictures-row.active");
    var paragraph = $("p[data-person=" + member.data("person") + "]");
    var currentParagraph = $("p[data-person=" + currentMember.data("person") + "]");
    currentMember.removeClass("active");
    currentParagraph.removeClass("active");
    if (row.index() != currentRow.index()) currentRow.removeClass("active");
    currentParagraph.parent().height(0);
    setTimeout(function () {
        currentMember.removeClass("show");
        currentParagraph.removeClass("show");
        member.addClass("show");
        paragraph.addClass("show");
        setTimeout(function () {
            row.addClass("active");
            member.addClass("active");
            paragraph.addClass("active");
            paragraph.parent().height(paragraph.height());
            $(".mdl-layout__content").animate({scrollTop: row.position().top}, 500);
        }, 10);
    }, 300);
}
