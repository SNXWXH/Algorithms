function solution(participant, completion) {
    let participantSort = participant.sort()
    let completionSort = completion.sort()
    
    for(let i = 0; i < participant.length; i++){
        if(participantSort[i] !== completionSort[i]) return participantSort[i]
    }
}