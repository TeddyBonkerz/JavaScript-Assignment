function calculatePay(hoursWorked) {
    if (hoursWorked <= 40) {
        return hoursWorked * 15;
    } else {
        return (40 * 15) + ((hoursWorked - 40) * 1.5 * 15);
    }
}

function displayPayroll() {
    var arr = [];
    var i = 1;

    while (true) {
        var hours = prompt("Enter Number of hours worked for the week by Employee #" + (i) + ": \n" + "Please Enter -1 when you are finished.", 0);
        hours = parseInt(hours);
        if (hours == -1) {
            break;
        }
        arr.push(hours);
        i++;
    }

    document.write("<table border=1");

    document.write("<tr>");
    document.write("<td> Employee # </td>");
    document.write("<td> Hours Worked </td>");
    document.write("<td> Gross Pay(in $) </td>");
    document.write("</tr>");

    for (i = 0; i < arr.length; i++) {
        document.write("<tr>");
        document.write("<td>" + (i + 1) + "</td>");
        document.write("<td>" + arr[i] + "</td>");
        document.write("<td>" + calculatePay(arr[i]).toFixed(3) + "</td>");
        document.write("</tr>");
    }
}