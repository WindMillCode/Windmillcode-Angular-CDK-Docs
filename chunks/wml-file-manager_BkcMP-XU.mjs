async function getMod() {
						return import('./wml-file-manager_BIoG4PPC.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
