export const Loader = () => {
	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<div className='flex items-center justify-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-500 border-r-transparent text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'>
				<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
					Loading...
				</span>
			</div>
		</div>
	);
};
