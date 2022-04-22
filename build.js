const esbuild = require('esbuild');
const fs = require('fs');
const path = require("path");

esbuild.build({
	entryPoints: ['./src/main.tsx'],
	outdir: './dist',
	bundle: true,
	minify: true,
	loader: {
		".woff": "file",
		".woff2": "file"
	},
	plugins: [],
}).then(_ => copyRecursiveSync('./static', './dist'));

const copyRecursiveSync = (src, dest) => {
	// Check if exists and it's a directory
	const isDirectory = fs.existsSync(src) && fs.statSync(src).isDirectory();

	// If it's a directory then we look inside, else copy file into dest
	if (isDirectory) {
		// Create dest folder if it's not already done
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest);
		}

		// Look for every item inside for recursive folders
		fs.readdirSync(src).forEach((dir) => {
			const childSrc = path.join(src, dir);
			const childDest = path.join(dest, dir);
			copyRecursiveSync(childSrc, childDest);
		})
	} else {
		fs.copyFileSync(src, dest);
	}
}
