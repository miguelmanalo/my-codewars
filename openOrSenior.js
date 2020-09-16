function openOrSenior(data){
    const memberStatus = [];
    data.forEach(function (item) {
        (item[0] >= 55 && item[1] > 7) ?
        memberStatus.push("Senior") :
        memberStatus.push("Open");
    });
    return memberStatus
}