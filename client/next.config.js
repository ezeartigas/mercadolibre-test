const path = require('path');

module.exports = {
   reactStrictMode: true,
   sassOptions: {
      prependData: `
			@use 'variables' as *;
			@use 'typography' as *;
			@use 'helpers/include-media' as *;
			@use 'helpers/utils' as *;
    	`,
      includePaths: [path.join(__dirname, 'src/styles')],
   },
};
