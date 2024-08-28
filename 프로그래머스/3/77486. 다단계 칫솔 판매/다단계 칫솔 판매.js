const solution = (enroll, referral, seller, amount) => {
    const members = new Map();
    
    enroll.forEach((member, i) => {
        members.set(member, { referral: referral[i], benefit: 0 });
    });
    
    
    // 수익 계산
    seller.forEach((member, i) => {
        let curAmount = amount[i] * 100;
        let curMember = members.get(member);
        
        // 수익 분배
        while (curAmount && curMember) {
            // floor를 통해서 1원 미만인 경우 처리
            let benefitAmount = Math.floor(curAmount / 10);
            curMember.benefit += curAmount - benefitAmount;
            curAmount = benefitAmount;
            curMember = members.get(curMember.referral);
       } 
    });
    
    return enroll.map(member => members.get(member).benefit);
}