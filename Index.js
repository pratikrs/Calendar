$(document).ready(function () {
    //highlight selected field

    $('td').live('mouseover', function () {

        if ($(this).css("background-color") == "rgb(255, 255, 255)") {
            $(this).css("background-color", "#FFDFCC");
        }
    });

    $('td').live('mouseleave', function () {

        if ($(this).css("background-color") == "rgb(255, 223, 204)") {
            $(this).css("background-color", "rgb(255, 255, 255)");
        }
    });

    $('td').live('click', function () {

        $("#spnSelectedDate").text($(this).find("a").attr("id"));
    });


    $(".month").live('click', function () {

        if ($(this).hasClass('disabled')) return;
        var object = $(this).attr("id");
        var str = object.split('/');
        // str[0] contains "month"
        // str[1] contains "year"

        GetCalendar(str[0], str[1]);
    });

    $(".firstmonth,.lastmonth").live('click', function () {
        var object = $(this).attr("id");
        var str = object.split('/');
        // str[0] contains "month"
        // str[1] contains "year"

        GetCalendar(str[0], str[1]);
        if ($(this).hasClass('firstmonth')) {
            $('.previous').addClass('disabled');
            $('.next').removeClass('disabled');
        } else {
            $('.next').addClass('disabled');
            $('.previous').removeClass('disabled');
        }


    });

});


function GetCalendar(month, year) {
    $.ajax
        ({
            url: '../../Home/AsyncUpdateCalender',
            type: 'GET',
            traditional: true,
            async:false,
            contentType: 'application/json',
            data: { month: month, year: year },
            success: function (result) {
                if (!jQuery.isEmptyObject(result)) {
                    var week1 = $("#week1");
                    week1.empty();
                    var week2 = $("#week2");
                    week2.empty();
                    var week3 = $("#week3");
                    week3.empty();
                    var week4 = $("#week4");
                    week4.empty();
                    var week5 = $("#week5");
                    week5.empty();
                    var week6 = $("#week6");
                    week6.empty();
                    var newHeader = $('<a style="float:left;margin-left:10px;" class="firstmonth btn" id="1/1900">&lt;&lt; First</a> <a id=' + result.prevMonth + ' class="month btn previous" style="float:left;margin-left: 10px;">&lt; Prev</a><span id="spnCurrMonth">' + getMonth(month) + ' ' + year + '</span><a style="float:right;margin-right:10px;" class="lastmonth btn" id="12/2099">Last &gt;&gt;</a> <a id=' + result.nextMonth + ' class="month btn next" style="float:right;margin-right: 10px;">Next &gt;</a>');
                    $("#component-header").empty();
                    $("#component-header").append(newHeader);
                    $.each(result.Week1, function (i, item) {
                        debugger
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week1.append(htmlStr);
                        } else {
                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3></a>');
                            }

                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3></a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3></a>');
                            }

                            week1.append(htmlStr);

                        }

                    });
                    $.each(result.Week2, function (i, item) {
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week2.append(htmlStr);
                        } else {

                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            week2.append(htmlStr);
                        }
                    });
                    $.each(result.Week3, function (i, item) {
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week3.append(htmlStr);
                        } else {
                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            week3.append(htmlStr);
                        }
                    });
                    $.each(result.Week4, function (i, item) {
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week4.append(htmlStr);
                        } else {
                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            week4.append(htmlStr);
                        }
                    });
                    $.each(result.Week5, function (i, item) {
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week5.append(htmlStr);
                        } else {
                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            week5.append(htmlStr);
                        }
                    });
                    $.each(result.Week6, function (i, item) {
                        var htmlStr = null;
                        if (jQuery.isEmptyObject(item)) {
                            htmlStr = $('<td></td>');
                            week6.append(htmlStr);
                        } else {
                            if (item.daycolumn == 0 || item.daycolumn == 6) {
                                htmlStr = $('<td class="weekend"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            else if (item.dateStr != getTodayDate()) {
                                htmlStr = $('<td></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            } else {
                                htmlStr = $('<td class="selected"></td>');
                                htmlStr.append('<a   id=' + item.dateStr + ' class="dt"><h3>' + item.dtDay + '</h3> </a>');
                            }
                            week6.append(htmlStr);
                        }
                    });

                    $("#component-table").trigger("update");
                } else {
                    alertMsg('Oops, errors occur in retrieving calender');
                }
            }
        });
}



function getTodayDate() {
    var localdate = new Date;
    var localday = localdate.getDate();
    //    if (localday < 10) {
    //        localday = '0' + localday;
    //    }
    var localmonth = localdate.getMonth() + 1;
    //    if (localmonth < 10) {
    //        localmonth = '0' + localmonth;
    //    }
    var localyear = localdate.getFullYear();

    var local = localmonth + "/" + localday + "/" + localyear;
    return local;
}


//function alertMsg(text) {
//    $("#dialog-modal").dialog({
//        title: text,
//        modal: true
//    });
//}


function getMonth(m) {
    var month;
    switch (m) {
        case "1":
            month = "Jan";
            return month;
            break;
        case "2":
            month = "Feb";
            return month;
            break;
        case "3":
            month = "Mar";
            return month;
            break;
        case "4":
            month = "Apr";
            return month;
            break;
        case "5":
            month = "May";
            return month;
            break;
        case "6":
            month = "Jun";
            return month;
            break;
        case "7":
            month = "Jul";
            return month;
            break;
        case "8":
            month = "Aug";
            return month;
            break;
        case "9":
            month = "Sep";
            return month;
            break;
        case "10":
            month = "Oct";
            return month;
            break;
        case "11":
            month = "Nov";
            return month;
            break;
        case "12":
            month = "Dec";
            return month;
            break;
        default:
            month = "non";
            return month;
            break;
    }
}




