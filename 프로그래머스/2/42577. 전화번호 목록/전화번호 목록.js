const solution = (phone_book) => {
    phone_book.sort();

    for (let i = 0; i < phone_book.length - 1; i++) {
        // 다음 전화번호가 현재 전화번호로 시작하는지 비교
        if (phone_book[i+1].startsWith(phone_book[i])) return false;
    }

    return true;
}
