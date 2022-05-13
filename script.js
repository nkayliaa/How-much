$("button").click(function() {

    let Q1 = $(".Q1").val();
    let Q2 = $(".Q2").val();
    let Q3 = $(".Q3").val();
    console.log(Q3);
    let result = Q1 * Q2 ;
    $(".fortune-display").append("Because you are " + Q3+ " you will spend "+ result);
});