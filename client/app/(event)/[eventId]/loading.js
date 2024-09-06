export default function loading() {
    return (
        <div className="w-full  p-[30px] rounded-[20px] border-[5px] border-dashed border-gray-100;">
            <div className="w-[150px] rounded-[10px] h-5 bg-gray-200 mx-auto my-0;"></div>
            <div className="w-[100%] h-32 rounded-[10px] mt-8 bg-gray-200"></div>
            <div className="w-[150px] rounded-[10px] h-5 mt-8 bg-gray-200 mx-auto my-0;"></div>
            <div className="flex justify-start items-center mt-8 w-[100%] h-24 gap-10">
                <div className="w-[20%] h-[100%] bg-gray-200 rounded-[10px]"></div>
                <div className="w-[20%] h-[100%] bg-gray-200 rounded-[10px]"></div>
                <div className="w-[20%] h-[100%] bg-gray-200 rounded-[10px]"></div>
            </div>
        </div>
    )
}