

function applyCssExtend() {
	var all_rules = {};
	var overwrite_current_rule_params = false;


	function extendRule(css_rule) {
		var extend_classes = css_rule.style.getPropertyValue('--extends').trim();

		if (! extend_classes) {
			// if rule doesn't have a '--extends' property, we leave directly
			return;
		}

		if (["'", '"'].indexOf(extend_classes.substr(0, 1)) !== -1) {
			extend_classes = extend_classes.substr(1, extend_classes.length-2)
		}

		var extend_params = extend_classes.split(' ');

		// for each parent css class
		for (var k=0; k<extend_params.length; k++) {
			var extend_param = extend_params[k];
			var rule_parent = all_rules[extend_param];

			if (rule_parent) {

				// if parent rule has a '--extends' property, we process this class first
				if (rule_parent.style.getPropertyValue('--extends')) {
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
						//console.log("set " + style_prop_name + " from " + extend_param + " to " + css_rule.selectorText);
						css_rule.style[style_prop_name] = rule_parent.style[style_prop_name];
					}
				}
			}

			css_rule.style['--extends'] = null;
		}
	}


	function _applyCssExtend() {
		var rules_to_extend = [];

		// 1) build css classes list, which have a "--extends" property

		// for all stylesheet / css tags (link & style tags) ...
		for (p in document.styleSheets) {
			var stylesheet = document.styleSheets[p];

			// for each css class/rule of the stylesheet ...
			for (q in stylesheet.cssRules) {
				var cssRule = stylesheet.cssRules[q];

				all_rules[cssRule.selectorText] = cssRule;

				if (cssRule.style && cssRule.style.getPropertyValue('--extends')) {
					rules_to_extend.push(cssRule);
				}
			}
		}

		// 2) for all css classes/rules to extend ...
		for (p in rules_to_extend) {
			extendRule(rules_to_extend[p]);
		}
	}


	_applyCssExtend();
}

