

function applyCssExtend() {
	var all_rules = {};
	var overwrite_current_rule_params = false;


	function extendRule(css_rule) {
		var style_content = css_rule.style['content'];

		if (! style_content) {
			// if rule doesn't have a 'content' property, we leave directly
			return;
		}

		if (["'", '"'].indexOf(style_content.substr(0, 1)) !== -1) {
			style_content = style_content.substr(1, style_content.length-2)
		}

		var content_params = style_content.split(' ');
		var content_action = content_params.shift();

		if (content_action == '@extend') {

			for (var k=0; k<content_params.length; k++) {
				var content_param = content_params[k];
				var rule_parent = all_rules[content_param];

				if (rule_parent) {

					// if parent rule has a 'content' property, we process this class first
					if (rule_parent.style['content']) {
						extendRule(rule_parent);
					}

					// for each css property in the rule
					for (var i=0; i<rule_parent.style.length; i++) {
						var style_prop_name = rule_parent.style[i];
						var style_prop = rule_parent.style[style_prop_name];

						if (css_rule.style[style_prop_name] != '' && ! overwrite_current_rule_params) {
							continue;
						}
						
						if (style_prop) {
							//console.log("set " + style_prop_name + " from " + content_param + " to " + css_rule.selectorText);
							css_rule.style[style_prop_name] = rule_parent.style[style_prop_name];
						}
					}
				}

			}

			css_rule.style['content'] = null;
		}
	}


	function _applyCssExtend() {
		var rules_to_extend = [];

		// 1) build css classes list, which have a "content" property contening "@extend" method

		// for all stylesheet / css tags (link & style tags)
		for (a in document.styleSheets) {
			var stylesheet = document.styleSheets[a];

			// for each css class of the stylesheet
			for (b in stylesheet.cssRules) {
				var cssRule = stylesheet.cssRules[b];

				all_rules[cssRule.selectorText] = cssRule;

				if (cssRule.style && cssRule.style.content.indexOf('@extend') !== -1) {
					rules_to_extend.push(cssRule);
				}
			}
		}

		// 2) for all css classes, extend it
		for (c in rules_to_extend) {
			var rule_to_extend = rules_to_extend[c];
			extendRule(rule_to_extend);
		}
	}


	_applyCssExtend();
}

