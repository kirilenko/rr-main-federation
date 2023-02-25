import { loadRemoteModule } from '@softarc/native-federation';
import { lazy, Suspense } from 'react';

export default () => {
	const Wbs = lazy(
		async () => await loadRemoteModule('remoteWidgetsWbs', 'wbs')
	)

	return (
		<>
			<h1>main.host</h1>
			<Suspense fallback='loading...'>
				<Wbs />
			</Suspense>
		</>
	);
};
