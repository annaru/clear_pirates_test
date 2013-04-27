var Seasonvar = function() {
	this.toRemove = {
	  'all': [
		'a#brand',
		'#brand2',
		'.sidebl',
		'.ololo',
		'.prmbn',
		'.td-for-left-block',
		'.films-num',
		'.full-news table tr:first-child td:last-child',
		'#rmg',
		'#rpc',
		'.footer',
		'.panel',
		'h1[title="Сериал – часть жизни многих россиян!"]',
		'.full-news-3',
		'.center-title',
		'.doptxt p[align="justify"]',
		'#prmbn',
		'object[classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"]',
	  ],

	  'certain_url.html': [
	  ],
	},

	this.toReplace = {
	},

	this.execute = function(){
		// Close comments spoiler
		jQuery(".spoiler-head").click();
		// Move video block
		var videoBlock = jQuery('#vpcenter');
		jQuery('.full-news-1').after(videoBlock);
		// Insert in logo place
		jQuery('#logo').html(home_link());
		// Convert date to 'today' string
		jQuery.each(jQuery('.ff1'), function(i, v){
    		var elem = jQuery(v);
    		var valueDate = elem.text();

			var today = new Date();
			var month = today.getMonth()+1;
			var day = today.getDate();
			var year = today.getFullYear();

			var today_date = (day<10 ? '0' : '') + day +
				'.' + (month<10 ? '0' : '') + month + 
				'.' + year;

			var yesterday = new Date();
			yesterday.setDate(yesterday.getDate() - 1);
			var month = yesterday.getMonth()+1;
			var day = yesterday.getDate();
			var year = yesterday.getFullYear();

			var yesterday_date = (day<10 ? '0' : '') + day +
				'.' + (month<10 ? '0' : '') + month + 
				'.' + year;

			console.log(today_date);
			console.log(yesterday_date);
			console.log(valueDate);

			if (today_date == valueDate) {
				elem.text('Сегодня');
			} else if (yesterday_date == valueDate) {
				elem.text('Вчера');
			}
		});
	}
};