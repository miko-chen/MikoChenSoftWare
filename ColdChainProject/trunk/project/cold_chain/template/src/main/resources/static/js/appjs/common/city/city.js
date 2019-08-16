var $province = $("#Province");
var $city = $("#City");
var $village = $("#Village");
$city.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
$village.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
var id = 0;
function province() {
    //alert('1');
    $province.empty();
    $province.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
    $.ajax({
        url : prefix +"/name",
        type : "get",
        data : 0,
        dataType : "json",
        success : function(data){
            //alert(data.length);
            for(var i = 0;i<data.length;i++){
                $province.append("<option value=\'"+data[i].areaId+"\' >"+data[i].areaName+"</option>");
            }
            //alert(data[2].areaName+','+data[2].areaId)
        }
    });
}


$province.change(function () {
    id = $province.val();
    // alert(id);
    if (999999 == id){
        //alert("请先选择省级菜单");
        $city.empty();
        $city.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
        $village.empty();
        $village.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
    } else {
        $city.empty();
        $city.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
        $village.empty();
        $village.append('<option selected=\'selected\' value=\"999999\">请选择</option>');
        $.ajax({
            url : prefix +"/name",
            type : "get",
            data : {"areaParentAreaId":id},
            dataType : "json",
            success : function(data){
                //alert(data.length);
                for(var i = 0;i<data.length;i++){
                    $city.append("<option value=\'"+data[i].areaId+"\' >"+data[i].areaName+"</option>");
                }
                //alert(data[2].areaName+','+data[2].areaId)
            }
        });
    }
});
$city.change(function () {
    id = $city.val();
    if (999999 == id){
        //alert("请先选择省级菜单");
        $village.empty();
        $village.append('<option selected=\'selected\'>请选择</option>');
    } else {
        //alert(id)
        //$village.empty();
        $village.empty();
        $village.append('<option selected=\'selected\'>请选择</option>');
        $.ajax({
            url : prefix +"/name",
            type : "get",
            data : {"areaParentAreaId":id},
            dataType : "json",
            success : function(data){
                //alert(data.length);
                for(var i = 0;i<data.length;i++){
                    $village.append("<option value=\'"+data[i].areaId+"\' >"+data[i].areaName+"</option>");
                }
                //alert(data[2].areaName+','+data[2].areaId)
            }
        });}
});