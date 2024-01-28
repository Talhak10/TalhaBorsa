export default function Items({currentItems}) {
    return (
        <>
            {currentItems.map(([key, value], index) => (
                <div
                    key={index}
                    className="hover:scale-105 cursor-pointer transition-all px-4 py-2 shadow rounded-md bg-white/20 border border-white/50 flex items-center justify-center flex-col gap-1"
                >
                    <p className="text-2xl font-bold text-center">{value.text}</p>
                    <p className="text-base text-center">
                        {parseFloat(value.buying).toFixed(2)}&#8378;
                    </p>
                </div>
            ))}
        </>
    )
}