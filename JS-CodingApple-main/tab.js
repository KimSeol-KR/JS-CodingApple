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
// $('.tab-button').eq(0).on('click',function(btnNum){
// btnNum = 0;//.eq(0) 은 인덱싱
// buttonClick(btnNum);
// });
// $('.tab-button').eq(1).on('click',function(btnNum){
//     btnNum = 1;//.eq(0) 은 인덱싱
//     buttonClick(btnNum);
//     });
// $('.tab-button').eq(2).on('click',function(btnNum){
// btnNum = 2;//.eq(0) 은 인덱싱
// buttonClick(btnNum);
// });

//for 문 == 코드 복붙 (반복실행)

    // for (var i = 0; i < 3; i++){
    //     console.log("하요");
    // }

    let count = $('.tab-button').length;

    // for (let btnNum = 0; btnNum < count; btnNum++){
    //     $('.tab-button').eq(btnNum).on('click',function(){
    //         buttonClick(btnNum);
    //         });
    // }


    // $('.list').click(function(e){
    //     // 지금누른게 버튼0 이면 탭열기(0)
    //     if(e.target == document.querySelectorAll('.tab-button')[0]){
    //         buttonClick(0);
    //     }else if(e.target == document.querySelectorAll('.tab-button')[1]){
    //         buttonClick(1);
    //     }else if(e.target == document.querySelectorAll('.tab-button')[2]){
    //         buttonClick(2);
    //     }

    // })

    $('.list').click(function(e){ 
    // 이벤트버블링 으로 인해 요소안에 하위요소가 있을 땐, 상위 요소를 선택하면 하위요소 까지 이벤트 감지
       
        buttonClick(e.target.dataset.id); 
    //더 정확하게는 e.target.dataset.id 은 문자형 이라 정수형으로 바꾸면 됨 

    })
    // var 변수 = parseInt(문자);    //문자를 정수형 숫자로 변환해줌
    // var 변수 = parseFloat(문자);     //문자를 실수형 숫자로 변환해줌
    // var 변수 = Nember(문자);    //문자를 정수&실수형 숫자로 변환해줌

    // 제이쿼리 함수를 이용하는 방법
    // $(셀렉터).data('데이터이름', '값') 이렇게 저장하고
    // $(셀렉터).data('데이터이름') 이렇게 출력합니다. 