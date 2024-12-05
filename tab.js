// 버튼 0 누르면
// - 모든 버튼 에 붙은 orange 클래스 명 제거
// - 버튼 0 에 orange 클래스 명 추가
// - 모든 div 에 붙은 show 클래스 명 제거
// - div0 에 show 클래스명 추가


function buttonClick (btnNum){
    $(".tab-button").removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(btnNum).addClass('orange');
    $('.tab-content').eq(btnNum).addClass('show');
}
$('.tab-button').eq(0).on('click',function(btnNum){
btnNum = 0;//.eq(0) 은 인덱싱
buttonClick(btnNum);
});
$('.tab-button').eq(1).on('click',function(btnNum){
    btnNum = 1;//.eq(0) 은 인덱싱
    buttonClick(btnNum);
    });
$('.tab-button').eq(2).on('click',function(btnNum){
btnNum = 2;//.eq(0) 은 인덱싱
buttonClick(btnNum);
});