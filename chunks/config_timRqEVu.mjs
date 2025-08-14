const astroConfig = {"base":"/Windmillcode-Angular-CDK-Docs","root":"file:///C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/","srcDir":"file:///C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///C:/My_Notebook/WindMillCode/projects/angular-templates/starlight-docs/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
