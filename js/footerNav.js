//footer-nav
$(function(){
	var $oFooterNavImg=$('.footer .footer-active-nav img');
	var oFooterNavImgPriUrl=$oFooterNavImg.attr("src");
	var oFooterNavImgNewUrl=oFooterNavImgPriUrl.substring(0,oFooterNavImgPriUrl.length-4);
	$oFooterNavImg.attr("src",oFooterNavImgNewUrl+"-active.png");
})
			