function initApp() {
    $(".team-member").on("click", toggleActiveTeamMember);
}

function toggleActiveTeamMember() {
    var member = $(this);
    var currentMember =  $(".team-member.active");
    if (member[0] == currentMember[0]) return;
    var row = member.parent(".team-pictures-row");
    var currentRow = $(".team-pictures-row.active");
    currentMember.removeClass("active");
    if (row.index() != currentRow.index()) currentRow.removeClass("active");
    setTimeout(function () {
        currentMember.removeClass("show");
        $("");
        member.addClass("show");
        setTimeout(function () {
            row.addClass("active");
            member.addClass("active");
        }, 10);
    }, 300);
}
