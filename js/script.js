function initApp() {
    $(".team-member").on("click", toggleActiveTeamMember);
    var firstMember = $(".team-pictures-row:first-child .team-member:first-child");
    firstMember.addClass("show active");
    var paragraph = $("p[data-person=" + firstMember.data("person") + "]");
    paragraph.addClass("show active");
    setTimeout(function () {
        paragraph.parent().height(paragraph.height() + parseInt(paragraph.css("padding-top")) * 2);
    }, 10);
    var vh = $(window).height();
    $("#problem").css("margin-top", vh);
    $("#concept").css("margin-top", vh * 2);
    $("#team").css("margin-top", vh * 3);
    $(".mdl-layout__content").on("scroll", checkScrollHeader);
    $("#home-link").on("click", function () {
        $(".mdl-layout__content").animate({scrollTop: 0}, 500);
    });
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
            paragraph.parent().height(paragraph.height() + parseInt(paragraph.css("padding-top")) * 2);
            $(".mdl-layout__content").animate({scrollTop: row.position().top + parseInt($("#team").css("margin-top"))}, 500);
        }, 10);
    }, 300);
}

function checkScrollHeader() {
    var scroll = $(".mdl-layout__content").scrollTop();
    var max = 680;
    var header = $(".mdl-layout__header");
    if (scroll > max) {
        header.removeClass("mdl-layout__header--transparent");
        $("body").removeClass("trans-header");
    } else {
        header.addClass("mdl-layout__header--transparent");
        $("body").addClass("trans-header");
    }
}
