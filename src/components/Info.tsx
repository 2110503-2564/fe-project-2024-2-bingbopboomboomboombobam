export default function Info({data}:{data: [string, string][]}) {
    return (
        <div className="border-1 rounded-md border-s-grey-600 bg-s-grey-1000 w-full p-2 px-5 text-white font-light text-sm">
                    {
                        data.map((item, index) => <div className="flex flex-row justify-between items-center">
                            <div>{item[0]}:</div>
                            <div>{item[1]}</div>
                        </div>)
                    }
                </div>
    )
}