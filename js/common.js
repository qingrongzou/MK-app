function addDom(target,oData){
	if (oData.length==3) {
		$.ajax({
			type:"get",
			url:"../../goods.json",
			async:true,
			success:function(data){
				var arrData1=data[$(oData).get(0)][$(oData).get(1)];
				getData(target,oData,arrData1);
			}
		});
	} else if (oData.length==2) {
		$.ajax({
			type:"get",
			url:"../../goods.json",
			async:true,
			success:function(data){
				var arrData1=data[$(oData).get(0)];
				getData(target,oData,arrData1);
			}
		});
	} else{
		$.ajax({
			type:"get",
			url:"../../goods.json",
			async:true,
			success:function(data){
				$.each(data[$(oData).get(0)], function(i,val) {
					var $oImgDiv=$('<div>').appendTo(target);
					var $oA=$("<a>").appendTo($oImgDiv).attr('href','#');
					$('<img>').appendTo($oA).attr('src','../../img/shop/'+val.src);
				});
			}
		});
	}
}

function getData(target,oData,arrData){
	$.each(arrData, function(i,val) {
		var $oSection=$("<section>").appendTo(target).addClass(target+'-'+val);
		var $oTit=$('<div>').appendTo($oSection).addClass("title");
		var $oCon=$('<div>').appendTo($oSection).addClass("con");
		$('<img>').appendTo($oTit).attr('src','../../img/shop/'+val.title.src);
		$.each(val.con, function(index,value) {
			var $oImgDiv=$('<div>').appendTo($oCon);
			var $oA=$("<a>").appendTo($oImgDiv).attr('href','#');
			$('<img>').appendTo($oA).attr('src','../../img/shop/'+value.src)
		});
	});
}
