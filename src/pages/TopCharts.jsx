import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';

import { useGetTopChartsQuery } from '../redux/services/shamzamCore';
const TopCharts = () => {
	const { activeSong, isPlaying } = useSelector(state => state.player);

	const { data, isFetching, error } = useGetTopChartsQuery();

	if (isFetching && loading) return <Loader title="Loading songs Top chart" />;

	if (error && country) return <Error />;

	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
				Discover around you
			</h2>
			<div className="grid place-items-center md:grid-cols-2 2xl:grid-cols-4 3xl:grid-cols-6  gap-8">
				{data?.map((song, i) => (
					<SongCard
						key={song.key}
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						data={data}
						i={i}
					/>
				))}
			</div>
		</div>
	);
};

export default TopCharts;
