const swup = new Swup({
	plugins: [
		new SwupMetaTagsPlugin(),
		new SwupPreloadPlugin(),
		/* new SwupRouteNamePlugin({
			routes: [
			  { name: 'home', path: '/' },
			  { name: 'about', path: '/about' },
			  { name: 'project', path: '/:lang/project/:slug' },
			  { name: 'any', path: '(.*)' }
			]
		  }) */
	],
  });

swup.on('willReplaceContent', unload);
swup.on('contentReplaced', init);
// this event runs for every page view after initial load