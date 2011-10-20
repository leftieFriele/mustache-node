var mu = require("mustache");
/**
 * Code is inspired heavily by this blog entry: http://bitdrift.com/post/2376383378/using-mustache-templates-in-express
 **/
exports.config = {
    compile: function (source, options) {
        if (typeof source == 'string') {
            return function(options) {
                options.locals = options.locals || {};
                options.partials = options.partials || {};
                if (options.body) {
                    locals.body = options.body;
				}
                return mu.to_html(source, options.locals, options.partials);
            };
        } else {
            return source;
        }
    },
    render: function (template, options) {
        template = this.compile(template, options);
        return template(options);
    }
};
