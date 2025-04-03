function solution(genres, plays) {
    let obj = {};
    let genresTotalobj = {};
    let result = [];

    // 장르별 총 재생 횟수 저장
    for (let i = 0; i < genres.length; i++) {
        genresTotalobj[genres[i]] = (genresTotalobj[genres[i]] || 0) + plays[i];
        
        if (!obj[genres[i]]) obj[genres[i]] = [];
        obj[genres[i]].push({ index: i, playCount: plays[i] });
    }

    // 장르별 재생 횟수 기준 내림차순 정렬
    let sortedGenres = Object.keys(genresTotalobj).sort((a, b) => genresTotalobj[b] - genresTotalobj[a]);

    // 각 장르에서 상위 2개 곡 찾기
    for (let genre of sortedGenres) {
        // 재생 횟수 내림차순, 같으면 인덱스 오름차순
        obj[genre].sort((a, b) => b.playCount - a.playCount || a.index - b.index) 
            .slice(0, 2).forEach(song => result.push(song.index));
    }

    return result;
}
