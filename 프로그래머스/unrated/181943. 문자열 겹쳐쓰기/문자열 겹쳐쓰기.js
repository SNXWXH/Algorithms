function solution(my_string, overwrite_string, s) {
    let ans = [];
    ans = my_string.substr(0, s) + overwrite_string;
    return ans.length == my_string.length 
        ? ans 
        : ans + my_string.substr(ans.length - my_string.length);
}