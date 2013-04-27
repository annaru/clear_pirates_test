console.log("Clear Pirates loaded on "+document.domain);
var DEBUG = 0;

switch (document.domain) {
	case 'seasonvar.ru':
		var seasonvar = new Seasonvar;
		clear_page(seasonvar);
		break;
}

function clear_page(page) {
	for (var rmCategory in page.toRemove) {
		if (page.toRemove.hasOwnProperty(rmCategory)) {
			if (rmCategory == 'all') {
				_remove_from_dom(page.toRemove[rmCategory]);
			} else {
				// todo
			}
		}
	}
	_replace_in_dom(page.toReplace);
	page.execute();
}

function _remove_from_dom(elements) {
	jQuery.each(elements, function(index, element) {
  		jQuery(element).remove();
		debug_msg(element + ' deleted');	
	});
	return;
}

function _replace_in_dom(replacements) {
	jQuery.each(replacements, function(selector, replacement) {
  		jQuery(selector).empty().html(replacement);
	});
	return;
}


function debug_msg(msg) {
	if ( ! msg) {
		return;
	}
	if (DEBUG === 2) {
		console.log(msg);
		alert(msg);
	} else if (DEBUG) {
		console.log(msg);
	}
	return;
}

function home_link(){
	var img = '<img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAx1JREFUeNrsW8F12kAQFUruxhWYDqxUIHLharsCyxWYnDmYHDjbrgC5gsgVGCpA7gB34BSQkJn3Zv0WzO6sJLRI0cx7+/SQBOz/nvl/BnBvs9kEXY4w6Hh0noCv+oPJZOL1zeM4PofDFNdyuXz19b6z2ez4GUDgF7Au8QiPLzpTAgD2msD36RQeMzp/vBLwBP4WDg+GyylcH0I53DCvYbQueG6vsRkAG59bwKtI4L5fsE7+mxJAMLBeEJzjU5QunLSeAAKB9T403PJuOB/BWpNYtpMA2vyawOyteajZUzwarvfrdoiwRvAXO0q/Gw9K7OiYWEiozSHCmsDjZjML+ARA/8AMUYIHj5+o9t8tDnHfeAJok6ml3tHmnoikXBO8czj/TFphImFMTtI8AkjpcXNjwy1rAr+kXiDdETxFArbEAyJnb/Y0jgBN6U2bQzARgrP0AlguOWYG3PebMiFrvA1qPb1J6TNlgY69ANb6LZIA68pSTscnwAF8SiACphf45BCq1hmHOB4BmojZlP7GoRewtcQvmkMkFnH0SwBs6o5R+oSUPmZ6AS6GqiUmEoYcCUXb57AE+Dl9iOFic1XAf2qJySEii0MERWeIsABwbqDRlf7+wOL10RLD67+pzLAQlrvOEKEj+DNGxHL6y78xvUBVEjJlk7C+W0geEGFxZQKIyZxR+m9076pOxdZsUneIMZM116UJcBhopqT0Z4wdHjrQIeYkjo+MQ6Qk2sUIcBxofjpkSG0kFHCIqWmGCC1Kb7O5iJSey5C640PwHBwCs2a16xChYaBJmIHm1SFDfMVAG6RcHGJhy4AiA00aNCe2BinGISIbAUal1waaeUml/1JilXGIOweHKNQHpNrn9AsPNlc1pppNPnL75QjQBxqfNncIm1xpDhGZHGLrm6F936po4PtBu0J9ynRJDnGqLoxGo0Il0EbwWzZZVQPaCt5p//IDCY/v9aeJBMhvhKQEPJINduT8mzywL7Tkv5IBQoAQIAQIAUKAECAECAFCgBAgBAgBQoAQIAQIAUKAECAEHDJ68r/DUgJCQKfjnwADANPkatdE2xaHAAAAAElFTkSuQmCC" />';
	var link = '<a href="/" title="На главную" alt="На главную" class="home-link">' + img + '</a>';
	return link;
}

debug_msg("Clear Pirates finished on "+document.domain);