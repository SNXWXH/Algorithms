const solution = (my_string, alp) => 
my_string.split("").map((v) => {
        if(v === alp)
            return v.toUpperCase();
        else
            return v;
    }).join("");