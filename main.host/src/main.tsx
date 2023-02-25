import { initFederation } from '@softarc/native-federation';

(async () => {
	await initFederation({
		remoteWidgetsWbs: 'http://localhost:3001/remoteEntry.json',
	});

	await import('./bootstrap');
})();
