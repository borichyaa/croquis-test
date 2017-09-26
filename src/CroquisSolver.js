exports.solve = function (str) {
    var oddNumbers = [];
    var holder = "";

    //filter odd numbers from string
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (c >= '0' && c <= '9')
            holder += c;
        else {
            if (holder.length > 0) {
                var n = parseInt(holder);
                if (n % 2 == 1)
                    oddNumbers.push(n);
                holder = "";
            }
        }
    }

    if (holder.length > 0)
        oddNumbers.push(parseInt(holder));

    //calculate total sum
    var sum = 0;
    for (var i in oddNumbers) {
        var n = oddNumbers[i];
        sum += n * n;
    }

    return sum;
}