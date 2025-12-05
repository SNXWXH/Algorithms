function solution(phone_book) {
    // 반례: 	["1134", "113", "112"] -> false
    
    const phone_book_sort = [...phone_book].sort()
    
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book_sort[i+1].startsWith(phone_book_sort[i])) return false         
    }
    
    return true;
}