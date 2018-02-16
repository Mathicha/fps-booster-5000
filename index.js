class fpsBooster {
	constructor(dispatch) {
		require('child_process').spawn('taskkill', ['/im', 'TERA.exe'])
		require('child_process').spawn('taskkill', ['/im', 'Tl.exe'])
		require('child_process').spawn('taskkill', ['/im', 'TERA-launcher.exe'])
	}
}

module.exports = fpsBooster;
