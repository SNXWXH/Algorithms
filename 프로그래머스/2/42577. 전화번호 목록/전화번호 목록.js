const solution = (phone_book) => {
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 전화번호와 다음 전화번호를 비교
        if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) return false;
    }

    return true;
}
